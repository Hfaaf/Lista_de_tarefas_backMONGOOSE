import { Request, Response } from "express";
import { Task } from "../models/Task";

export default {
  async create(req: Request, res: Response) {
    try {
      const { title, description, dueDate } = req.body;

      const task = await Task.create({
        title,
        description,
        dueDate
      });

      return res.status(201).json(task);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  },

  async list(req: Request, res: Response) {
    const tasks = await Task.find().sort({ createdAt: -1 });
    return res.json(tasks);
  },

  async update(req: Request, res: Response) {
    try {
      const { title, description, done, dueDate } = req.body;

      const task = await Task.findByIdAndUpdate(
        req.params.id,
        { title, description, done, dueDate },
        { new: true }
      );

      return res.json(task);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      await Task.findByIdAndDelete(req.params.id);
      return res.json({ message: "Task removida." });
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  },

  async searchTasks(req: Request, res: Response) {
    try {
      const qRaw = req.query.query;
      const q = Array.isArray(qRaw)
        ? qRaw.join(" ")
        : (qRaw ?? "").toString();

      if (!q.trim()) {
        const all = await Task.find().sort({ createdAt: -1 });
        return res.status(200).json(all);
      }

      const tasks = await Task.find({
        title: { $regex: q, $options: "i" }
      });

      return res.status(200).json(tasks);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao pesquisar tarefas" });
    }
  },
};
