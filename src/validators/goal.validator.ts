// validators/goal.validator.ts
import { body } from "express-validator";

export const validateGoal = [
    body("goal_title").notEmpty().withMessage("Goal title is required"),
    body("deadline").isISO8601().withMessage("Deadline must be a valid date"),
    body("outcome").notEmpty().withMessage("Outcome is required"),
    body("status")
        .isIn(["IN_PROGRESS", "COMPLETED", "NOT_STARTED", "CANCELLED"])
        .withMessage("Invalid status"),

    // Validate each milestone
    body("milestones")
        .isArray({ min: 1 })
        .withMessage("Milestones must be an array"),
    body("milestones.*.milestone_name")
        .notEmpty()
        .withMessage("Milestone name is required"),
    body("milestones.*.milestone_deadline")
        .isISO8601()
        .withMessage("Milestone deadline must be a valid date"),
    body("milestones.*.milestone_outcome")
        .notEmpty()
        .withMessage("Milestone outcome is required"),
    body("milestones.*.status")
        .isIn(["IN_PROGRESS", "COMPLETED", "NOT_STARTED", "CANCELLED"])
        .withMessage("Invalid milestone status"),

    // Validate each action step inside milestones
    body("milestones.*.action_steps")
        .isArray()
        .withMessage("Action steps must be an array"),
    body("milestones.*.action_steps.*.action_name")
        .optional()
        .notEmpty()
        .withMessage("Action name is required"),
    body("milestones.*.action_steps.*.action_deadline")
        .optional()
        .isISO8601()
        .withMessage("Action deadline must be a valid date"),
    body("milestones.*.action_steps.*.status")
        .isIn(["IN_PROGRESS", "COMPLETED", "NOT_STARTED", "CANCELLED"])
        .withMessage("Invalid milestone status"),
];

export const validateVision = [
    body("vision_title").notEmpty().withMessage("Vision title is required"),
    body("vision_description")
        .notEmpty()
        .withMessage("Description is required"),
    body("status")
        .isIn(["IN_PROGRESS", "COMPLETED", "NOT_STARTED", "CANCELLED"])
        .withMessage("Invalid status"),
];
