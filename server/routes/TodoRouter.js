import express from "express";
import {
  addTodo,
  deleteTodo,
  getTodo,
  updateTodo,
} from "../controller/TodoController.js";

const router = express.Router();

router.get("/", getTodo);
router.post("/add", addTodo);
router.put("/update", updateTodo);
router.delete("/delete", deleteTodo);

export default router;
