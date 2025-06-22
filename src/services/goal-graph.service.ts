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

        let nodes = [];
        let edges = [];

        // Create vision node
        nodes.push({
            id: vision.id,
            type: vision.type.toLocaleLowerCase(),
            data: {
                title: vision.visionTitle,
                deadline: "2024-12-31",
                status: vision.status,
                description: vision.visionDescription,
            },
            position: { x: 200, y: 50 },
        });

        // Create goal, milestone, and action nodes and edges for each goal and its children
        for (const goal of goals) {
            nodes.push({
                id: goal.id,
                type: goal.type.toLocaleLowerCase(),
                data: {
                    title: goal.goalTitle,
                    deadline: "2024-12-31",
                    status: goal.status,
                    description: goal.outcome,
                },
                position: { x: 200, y: 50 },
            });

            edges.push({
                id: `e-${vision.id}->${goal.id}`,
                source: vision.id,
                target: goal.id,
                type: "default",
            });

            // Create milestones and edge for each goal
            for (const milestone of goal.milestones) {
                nodes.push({
                    id: milestone.id,
                    type: milestone.type.toLocaleLowerCase(),
                    data: {
                        title: milestone.milestoneName,
                        deadline: "2024-12-31",
                        status: milestone.status,
                        description: milestone.milestoneOutcome,
                    },
                    position: { x: 200, y: 50 },
                });

                // Create edge from goal to milestone
                edges.push({
                    id: `e-${goal.id}->${milestone.id}`,
                    source: goal.id,
                    target: milestone.id,
                    type: "default",
                });

                // Create actions and edge for each milestone
                for (const action of milestone.actionSteps) {
                    // Create action node
                    nodes.push({
                        id: action.id,
                        type: action.type.toLocaleLowerCase(),
                        data: {
                            title: action.actionName,
                            deadline: "2024-12-31",
                            status: action.status,
                        },
                        position: { x: 200, y: 50 },
                    });
                    // Create edge from milestone to action
                    edges.push({
                        id: `e-${milestone.id}->${action.id}`,
                        source: milestone.id,
                        target: action.id,
                        type: "default",
                    });
                }
            }
        }

        const goalGraph = {
            nodes,
            edges,
        };

        return goalGraph;
    }
}
