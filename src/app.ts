import express from "express";
import goalRoute from "./routes/goal.routes";
import visionRoute from "./routes/vision.routes";
import { errorHandler } from "./middleware";

const app = express();
app.use(express.json());
app.use(errorHandler);

app.use("/api/goals", goalRoute);
app.use("/api/vision", visionRoute);

export default app;
