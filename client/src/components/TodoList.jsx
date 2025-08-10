export default function TodoList({
  todos,
  toggleComplete,
  setEditId,
  setTitle,
  setCompleted,
  deleteTodo,
}) {
  if (!todos.length) {
    return <p className="text-center text-gray-500">No todos yet</p>;
  }

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li
          key={todo._id}
          className="flex items-center justify-between bg-gray-100 p-3 rounded shadow-sm"
        >
          <span
            onClick={() => toggleComplete(todo)}
            className={`cursor-pointer ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {todo.title}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => {
                setEditId(todo._id);
                setTitle(todo.title);
                setCompleted(todo.completed);
              }}
              className="bg-yellow-400 hover:bg-yellow-500 text-white px-2 py-1 rounded text-sm"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todo._id)}
              className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
