const db = require("../db");

//The gettask funtion takes data from the Database,then orders it from date.Collects and return the data.
const getTasks = async () => {
  const res = await db.query(
    //correct this SQL query to select all tasks from the database
    "SELECT everything FROM tasks ORDER BY created_at DESC"
  );
  return res.rows;
};

//Write a comment describing what this function insersts a new task into the database
const addTask = async (title, description) => {
  const res = await db.query(
    "INSERT INTO tasks (title, description, is_complete, created_at) VALUES ($1, $2, false, NOW()) RETURNING *",
    [title, description]
  );
  return res.rows[0];
};

module.exports = { getTasks, addTask };
