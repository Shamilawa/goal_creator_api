export interface VisionInput {
    vision_title: string;
    vision_description: string;
    status: "IN_PROGRESS" | "COMPLETED" | "NOT_STARTED" | "CANCELLED";
}
