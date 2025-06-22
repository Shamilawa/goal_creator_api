import { Router } from "express";
import { getGoalsByVisionId, createGoal } from "../controllers/goal.controller";
import { validateGoal } from "../validators";
import { handleValidationErrors } from "../middleware";
import { asyncHandler } from "../middleware/async-handler";

const router = Router();

router.get("/:vision_id", asyncHandler(getGoalsByVisionId));
router.post(
    "/",
    validateGoal,
    handleValidationErrors,
    asyncHandler(createGoal)
);

export default router;
