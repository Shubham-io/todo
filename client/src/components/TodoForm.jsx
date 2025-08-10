export default function TodoForm({
  title,
  setTitle,
  editId,
  completed,
  setCompleted,
  addTodo,
  updateTodo,
}) {
  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Enter todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
      />
      {editId ? (
        <button
          onClick={updateTodo}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
        >
          Update
        </button>
      ) : (
        <button
          onClick={addTodo}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      )}
    </div>
  );
}
