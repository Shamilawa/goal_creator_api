import { PrismaClient, Status, Type } from "../../generated/prisma";
import { ActionStep, GoalInput, Milestone, VisionInput } from "../types";

const prisma = new PrismaClient();

export class VisionService {
    async getVisions() {
        try {
            const visions = await prisma.vision.findMany({
                include: {
                    goals: true,
                },
            });

            return visions;
        } catch (error) {
            console.error("Error fetching visions:", error);
            throw new Error("Failed to fetch visions");
        }
    }

    async getVisionById(visionId: string) {
        try {
            const vision = await prisma.vision.findUnique({
                where: {
                    id: visionId,
                },
            });

            if (!vision) {
                throw new Error("Vision not found");
            }

            return vision;
        } catch (error) {
            console.error("Error fetching vision by ID:", error);
            throw new Error("Failed to fetch vision by ID");
        }
    }

    async createVision(vision: VisionInput) {
        try {
            const createdVision = await prisma.vision.create({
                data: {
                    type: Type.VISION,
                    visionTitle: vision.vision_title,
                    visionDescription: vision.vision_description,
                    status: vision.status as Status,
                },
            });

            return createdVision;
        } catch (error) {
            console.error("Error creating vision:", error);
            throw new Error("Failed to create vision");
        }
    }
}
