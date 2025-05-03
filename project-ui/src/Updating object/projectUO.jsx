import React, { useState } from "react";

function TaskManager() {
  // Predefined array of tasks
  const predefinedTasks = [
    { title: "Task 1", description: "Description of Task 1", completed: false },
    { title: "Task 2", description: "Description of Task 2", completed: true },
    { title: "Task 3", description: "Description of Task 3", completed: false },
  ];

  // Initialize tasks state with the predefined tasks array
  const [tasks, setTasks] = useState(predefinedTasks);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Add or Update task function
  const handleAddOrUpdateTask = () => {
    if (title.trim() === "" || description.trim() === "") return;

    const newTask = { title, description, completed: false };

    if (editIndex === null) {
      // Adding a new task
      setTasks([...tasks, newTask]);
    } else {
      // Updating an existing task
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = { ...newTask, completed: tasks[editIndex].completed };
      setTasks(updatedTasks);
      setEditIndex(null);
    }

    setTitle("");
    setDescription("");
  };

  // Edit task function
  const handleEditTask = (index) => {
    setTitle(tasks[index].title);
    setDescription(tasks[index].description);
    setEditIndex(index);
  };

  // Delete task function
  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Toggle task completion function
  const handleToggleCompleted = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">📝 Task Manager</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          className="border p-2 flex-1"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task description"
          className="border p-2 flex-1"
        />
        <button
          onClick={handleAddOrUpdateTask}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {editIndex === null ? "Add Task" : "Update Task"}
        </button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center mb-2 p-2 border-b"
            style={{
              backgroundColor: task.completed ? "#d3ffd3" : "transparent",
            }}
          >
            <div>
              <strong>{task.title}</strong>
              <p>{task.description}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleToggleCompleted(index)}
                className={`px-3 py-1 rounded ${task.completed ? "bg-green-500" : "bg-gray-500"}`}
              >
                {task.completed ? "Completed" : "Mark as Completed"}
              </button>
              <button
                onClick={() => handleEditTask(index)}
                className="bg-yellow-400 px-2 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteTask(index)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;  // Only export default once at the end of the file
