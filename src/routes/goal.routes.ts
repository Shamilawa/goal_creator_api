import { Router } from "express";
import { getGoals, createGoal } from "../controllers/goal.controller";
import { validateGoal } from "../validators";
import { handleValidationErrors } from "../middleware";
import { asyncHandler } from "../middleware/async-handler";

const router = Router();

router.get("/", asyncHandler(getGoals));
router.post(
    "/",
    validateGoal,
    handleValidationErrors,
    asyncHandler(createGoal)
);

export default router;
