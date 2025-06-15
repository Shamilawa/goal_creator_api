import { Request, Response } from "express";
import { GoalService } from "../services/goal.service";

const goalService = new GoalService();

export const getGoals = async (req: Request, res: Response) => {
    const goals = await goalService.getGoals();
    return res.status(201).json(goals);
};

export const createGoal = async (req: Request, res: Response) => {
    const { body } = req;
    const goal = await goalService.createGoal(body);
    return res.status(201).json(goal);
};
