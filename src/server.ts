import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/database";
import taskRoutes from "./routes/task.routes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/tasks", taskRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
