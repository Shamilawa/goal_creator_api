import { Router } from "express";
import { generateGoalGraph } from "../controllers/goal-graph.controller";
import { asyncHandler } from "../middleware/async-handler";

const router = Router();

router.get("/:visionId", asyncHandler(generateGoalGraph));

export default router;
