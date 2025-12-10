import { Router } from "express";
import controller from "../controllers/task.controller";

const router = Router();

router.post("/", controller.create);
router.get("/", controller.list);
router.get("/search", controller.searchTasks);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;
