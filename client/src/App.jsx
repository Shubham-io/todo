 import { useState, useEffect } from "react";
import axios from "axios";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const API_URL = "http://localhost:5000/api/todos";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);
  const [completed, setCompleted] = useState(false);

  // Fetch todos on mount
  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const { data } = await axios.get(API_URL);
      if (data.success) setTodos(data.todos);
    } catch (err) {
      console.error(err);
    }
  }

  async function addTodo() {
    if (!title.trim()) return;
    try {
      const { data } = await axios.post(`${API_URL}/add`, { title });
      if (data.success) {
        resetForm();
        fetchTodos();
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function updateTodo() {
    if (!title.trim()) return;
    try {
      const { data } = await axios.put(`${API_URL}/update`, {
        id: editId,
        title,
        completed,
      });
      if (data.success) {
        resetForm();
        fetchTodos();
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function deleteTodo(id) {
    try {
      const { data } = await axios.delete(`${API_URL}/delete`, {
        data: { id },
      });
      if (data.success) fetchTodos();
    } catch (err) {
      console.error(err);
    }
  }

  async function toggleComplete(todo) {
    try {
      const { data } = await axios.put(`${API_URL}/update`, {
        id: todo._id,
        title: todo.title,
        completed: !todo.completed,
      });
      if (data.success) fetchTodos();
    } catch (err) {
      console.error(err);
    }
  }

  function resetForm() {
    setTitle("");
    setEditId(null);
    setCompleted(false);
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Todo App</h1>
      <TodoForm
        title={title}
        setTitle={setTitle}
        editId={editId}
        completed={completed}
        setCompleted={setCompleted}
        addTodo={addTodo}
        updateTodo={updateTodo}
      />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        setEditId={setEditId}
        setTitle={setTitle}
        setCompleted={setCompleted}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}
