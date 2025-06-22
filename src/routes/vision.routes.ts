import { Router } from "express";
import { asyncHandler } from "../middleware/async-handler";
import { createVision, getVisions } from "../controllers/vision.controller";
import { validateVision } from "../validators";
import { handleValidationErrors } from "../middleware";

const router = Router();

router.get("/", asyncHandler(getVisions));
router.post(
    "/",
    validateVision,
    handleValidationErrors,
    asyncHandler(createVision)
);

export default router;
