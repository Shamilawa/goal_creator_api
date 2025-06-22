export interface ActionStep {
    action_name: string;
    action_deadline: string;
    status: "IN_PROGRESS" | "COMPLETED" | "NOT_STARTED" | "CANCELLED";
}

export interface Milestone {
    milestone_name: string;
    milestone_deadline: string;
    milestone_outcome: string;
    status: "IN_PROGRESS" | "COMPLETED" | "NOT_STARTED" | "CANCELLED";
    action_steps?: ActionStep[];
}

export interface GoalInput {
    vision_id: string;
    goal_title: string;
    deadline: string;
    outcome: string;
    status: "IN_PROGRESS" | "COMPLETED" | "NOT_STARTED" | "CANCELLED";
    milestones: Milestone[];
}
