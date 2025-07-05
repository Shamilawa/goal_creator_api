import { GoalService } from "./goal.service";
import { VisionService } from "./vision.service";

const visionService = new VisionService();
const goalService = new GoalService();

export class GoalGraphService {
    async generateGoalGraph(visionId: string) {
        const vision = await visionService.getVisionById(visionId);
        const goals = await goalService.getAllGoalsByVisionsId(visionId);

        if (!vision) {
            throw new Error("Vision not found");
        }

        const nodes: any[] = [];
        const edges: any[] = [];

        // Layout constants
        const INIT_X = 400;
        const INIT_Y = 50;
        const GOAL_MILESTONE_V_GAP = 100; // Vertical gap between goal and its milestones
        const MILESTONE_ACTION_V_GAP = 120; // Vertical gap between milestone and first action step (same as ACTION_V_GAP)
        const ACTION_V_GAP = 120; // Vertical gap between action steps (increased for much more space)
        const MILESTONE_H_GAP = 300; // Horizontal gap between milestones
        const GOAL_BUFFER = 50; // Extra buffer between goals

        // 1) Vision node
        nodes.push({
            id: vision.id,
            type: vision.type.toLowerCase(),
            data: {
                title: vision.visionTitle,
                deadline: "2024-12-31",
                status: vision.status,
                description: vision.visionDescription,
            },
            position: { x: INIT_X, y: INIT_Y },
        });

        // Connect vision to first goal if goals exist
        if (goals.length > 0) {
            edges.push({
                id: `vision-to-goal-${goals[0].id}`,
                source: vision.id,
                target: goals[0].id,
                targetHandle: "top", // Connect to top handle of first goal
                type: "default",
            });
        }

        // Track the current Y position for goals
        let currentGoalY = INIT_Y + 150; // Start below vision with some gap

        // 2) For each goal...
        for (let i = 0; i < goals.length; i++) {
            const goal = goals[i];

            // Place goal node
            nodes.push({
                id: goal.id,
                type: goal.type.toLowerCase(),
                data: {
                    title: goal.goalTitle,
                    deadline: goal.deadline || "2024-12-31",
                    status: goal.status,
                    description: goal.outcome,
                },
                position: { x: INIT_X, y: currentGoalY },
            });

            // Connect this goal to the next goal if it exists
            if (i < goals.length - 1) {
                edges.push({
                    id: `goal-${goal.id}-to-goal-${goals[i + 1].id}`,
                    source: goal.id,
                    target: goals[i + 1].id,
                    sourceHandle: "bottom", // Connect from bottom handle
                    targetHandle: "top", // Connect to top handle
                    type: "default",
                });
            }

            // Calculate the maximum number of action steps among all milestones for this goal
            const maxActionSteps = Math.max(
                ...goal.milestones.map((m) => m.actionSteps.length),
                0
            );

            // Calculate milestone Y position (same level as the goal)
            const milestoneY = currentGoalY;

            // 3) Place milestones horizontally aligned with this goal
            goal.milestones.forEach((milestone, milestoneIndex) => {
                // Calculate milestone X position - start to the right of the goal
                const milestoneX =
                    INIT_X + (milestoneIndex + 1) * MILESTONE_H_GAP;

                // Place milestone node
                nodes.push({
                    id: milestone.id,
                    type: milestone.type.toLowerCase(),
                    data: {
                        title: milestone.milestoneName,
                        deadline: "2024-12-31",
                        status: milestone.status,
                        description: milestone.milestoneOutcome,
                    },
                    position: { x: milestoneX, y: milestoneY },
                });

                // Connect goal to first milestone only, then milestones connect to each other
                if (milestoneIndex === 0) {
                    // Goal connects to first milestone
                    edges.push({
                        id: `goal-${goal.id}-to-milestone-${milestone.id}`,
                        source: goal.id,
                        target: milestone.id,
                        sourceHandle: "right", // Connect from right handle of goal
                        type: "default",
                    });
                } else {
                    // Previous milestone connects to this milestone
                    edges.push({
                        id: `milestone-${
                            goal.milestones[milestoneIndex - 1].id
                        }-to-milestone-${milestone.id}`,
                        source: goal.milestones[milestoneIndex - 1].id,
                        target: milestone.id,
                        type: "default",
                    });
                }

                // Connect milestone to its first action step if it exists
                if (milestone.actionSteps.length > 0) {
                    edges.push({
                        id: `milestone-${milestone.id}-to-action-${milestone.actionSteps[0].id}`,
                        source: milestone.id,
                        target: milestone.actionSteps[0].id,
                        type: "default",
                    });
                }

                // Place action steps vertically under each milestone
                milestone.actionSteps.forEach((action, actionIndex) => {
                    nodes.push({
                        id: action.id,
                        type: action.type.toLowerCase(),
                        data: {
                            title: action.actionName,
                            deadline: "2024-12-31",
                            status: action.status,
                        },
                        position: {
                            x: milestoneX,
                            y:
                                milestoneY +
                                MILESTONE_ACTION_V_GAP +
                                ACTION_V_GAP * actionIndex,
                        },
                    });

                    // Connect this action to the next action if it exists
                    if (actionIndex < milestone.actionSteps.length - 1) {
                        edges.push({
                            id: `action-${action.id}-to-action-${
                                milestone.actionSteps[actionIndex + 1].id
                            }`,
                            source: action.id,
                            target: milestone.actionSteps[actionIndex + 1].id,
                            type: "default",
                        });
                    }
                });
            });

            // Calculate the total height needed for this goal's milestones and action steps
            const goalBlockHeight =
                MILESTONE_ACTION_V_GAP + // Gap below milestone level
                maxActionSteps * ACTION_V_GAP + // Space for action steps
                GOAL_BUFFER; // Extra buffer

            // Update Y position for next goal
            currentGoalY += goalBlockHeight;
        }

        return { nodes, edges };
    }
}
