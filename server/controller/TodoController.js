import Todo from "../models/TodoModel.js";

// Get all todos
export const getTodo = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.json({ success: true, todos });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Create a new todo
export const addTodo = async (req, res) => {
  try {
    const newTodo = new Todo({
      title: req.body.title,
    });

    const savedTodo = await newTodo.save();
    res.json({ success: true, message: savedTodo });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// update todo
export const updateTodo = async (req, res) => {
  const { id, title, completed } = req.body;
  try {
    const updateTodo = await Todo.findByIdAndUpdate(
      id,
      { title, completed }, // update object
    
    );
    res.json({ success: true, message: "Todo updated" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// delete todo
export const deleteTodo = async (req, res) => {
  const { id } = req.body;
  try {
    await Todo.findByIdAndDelete(id);
    res.json({ success: true, message: "Todo Deleted" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
