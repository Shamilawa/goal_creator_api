import { GoalGraphService } from "../services/goal-graph.service";

const goalGraphService = new GoalGraphService();

export const generateGoalGraph = async (req: any, res: any) => {
    try {
        const { visionId } = req.params;

        if (!visionId) {
            return res.status(400).json({ error: "Vision ID is required" });
        }

        const graph = await goalGraphService.generateGoalGraph(visionId);
        return res.status(200).json(graph);
    } catch (error) {
        console.error("Error generating goal graph:", error);
        return res.status(500).json({ error: "Failed to generate goal graph" });
    }
};
