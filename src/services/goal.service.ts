import { PrismaClient, Status } from "../../generated/prisma";
import { ActionStep, GoalInput, Milestone } from "../types";

const prisma = new PrismaClient();

export class GoalService {
    async getGoals() {
        try {
            return await prisma.goal.findMany({
                include: {
                    milestones: {
                        include: {
                            actionSteps: true,
                        },
                    },
                },
            });
        } catch (error) {
            console.error("Error fetching goals:", error);
            throw new Error("Failed to fetch goals");
        }
    }

    async createGoal(goal: GoalInput) {
        try {
            const createdGoal = await prisma.goal.create({
                data: {
                    goalTitle: goal.goal_title,
                    deadline: goal.deadline,
                    outcome: goal.outcome,
                    status: goal.status as Status,
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
            actionName: step.action_name,
            actionDeadline: step.action_deadline,
            status: step.status as Status,
        }));
    }
}
