import { PrismaClient, Status, Type } from "../../generated/prisma";
import { isValidObjectId } from "../helpers/mongodb-obj-validator";
import { ActionStep, GoalInput, Milestone } from "../types";

const prisma = new PrismaClient();

export class GoalService {
    async getAllGoalsByVisionsId(visionsId: string) {
        try {
            const goals = await prisma.goal.findMany({
                where: {
                    visionId: visionsId,
                },
                include: {
                    milestones: {
                        include: {
                            actionSteps: true,
                        },
                    },
                },
            });

            return goals;
        } catch (error) {
            console.error("Error fetching goals:", error);
            throw new Error("Failed to fetch goals");
        }
    }

    async createGoalByVisionId(goal: GoalInput) {
        try {
            if (!isValidObjectId(goal.vision_id)) {
                throw new Error("Invalid Vision ID format");
            }

            const visionExists = await prisma.vision.findUnique({
                where: {
                    id: goal.vision_id,
                },
            });

            if (!visionExists) {
                throw new Error("Vision not found");
            }

            const createdGoal = await prisma.goal.create({
                data: {
                    type: Type.GOAL,
                    goalTitle: goal.goal_title,
                    deadline: goal.deadline,
                    outcome: goal.outcome,
                    status: goal.status as Status,
                    vision: {
                        connect: {
                            id: goal.vision_id,
                        },
                    },
                    milestones: {
                        create: this.mapMilestones(goal.milestones),
                    },
                },
                include: {
                    milestones: {
                        include: {
                            actionSteps: true,
                        },
                    },
                },
            });

            return createdGoal;
        } catch (error) {
            console.error("Error creating goal:", error);
            throw new Error("Failed to create goal");
        }
    }

    private mapMilestones(milestones: Milestone[] = []) {
        return milestones.map((milestone) => ({
            type: Type.MILESTONE,
            milestoneName: milestone.milestone_name,
            milestoneDeadline: milestone.milestone_deadline,
            milestoneOutcome: milestone.milestone_outcome,
            status: milestone.status as Status,
            actionSteps: {
                create: this.mapActionSteps(milestone.action_steps),
            },
        }));
    }

    private mapActionSteps(actionSteps: ActionStep[] = []) {
        return actionSteps.map((step) => ({
            type: Type.ACTION_STEP,
            actionName: step.action_name,
            actionDeadline: step.action_deadline,
            status: step.status as Status,
        }));
    }
}
