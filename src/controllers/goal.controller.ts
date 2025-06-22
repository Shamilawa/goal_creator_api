import { Request, Response } from "express";
import { GoalService } from "../services/goal.service";

const goalService = new GoalService();

export const getGoalsByVisionId = async (req: Request, res: Response) => {
    const { visionId } = req.params;

    if (!visionId || typeof visionId !== "string") {
        return res.status(400).json({ error: "Invalid or missing visionId" });
    }

    const goals = await goalService.getAllGoalsByVisionsId(visionId);
    return res.status(201).json(goals);
};

export const createGoal = async (req: Request, res: Response) => {
    const { body } = req;
    const goal = await goalService.createGoalByVisionId(body);
    return res.status(201).json(goal);
};
