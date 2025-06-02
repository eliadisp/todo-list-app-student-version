const express = require("express");
const router = express.Router();
const taskModel = require("../model/taskModel");

//The route gets data and gives back Task
router.get("/", async (req, res) => {
  const tasks = await taskModel.getTasks();
  res.json(tasks);
});
// Post information that was from router.get
router.post("/", async (req, res) => {
  const { title, description } = req.body;
  const task = await taskModel.addTask(title, description);
  res.status(201).json(task);
});

module.exports = router;
