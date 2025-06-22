import { Request, Response } from "express";
import { VisionService } from "../services/vision.service";

const visionService = new VisionService();

export const getVisions = async (req: Request, res: Response) => {
    try {
        const visions = await visionService.getVisions();
        return res.status(200).json(visions);
    } catch (error) {
        console.error("Error fetching visions:", error);
        return res.status(500).json({ error: "Failed to fetch visions" });
    }
};

export const createVision = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const vision = await visionService.createVision(body);
        return res.status(201).json(vision);
    } catch (error) {
        console.error("Error creating vision:", error);
        return res.status(500).json({ error: "Failed to create vision" });
    }
};
