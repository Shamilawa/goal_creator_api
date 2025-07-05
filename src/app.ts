import express from "express";
import cors from "cors";

import goalRoute from "./routes/goal.routes";
import visionRoute from "./routes/vision.routes";
import goalGraphGenRoute from "./routes/goal-graph.route";
import { errorHandler } from "./middleware";

const app = express();

app.use(cors());
app.use(express.json());
app.use(errorHandler);

app.use("/api/goals", goalRoute);
app.use("/api/vision", visionRoute);
app.use("/api/goal-graph", goalGraphGenRoute);

export default app;
