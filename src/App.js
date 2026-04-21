import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, { text: task, done: false }]);
    setTask("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleDone = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <div className="app">
      <div className="card">
        <h1>📝 Todo Manager</h1>
        <p className="sub">Organize your tasks efficiently</p>

        <div className="inputBox">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter your task..."
          />
          <button onClick={addTodo}>Add</button>
        </div>

        <div className="list">
          {todos.length === 0 ? (
            <p className="empty">No tasks yet 🚀</p>
          ) : (
            todos.map((todo, index) => (
              <div
                key={index}
                className={`item ${todo.done ? "done" : ""}`}
              >
                <span>{todo.text}</span>

                <div className="actions">
                  <button
                    className="doneBtn"
                    onClick={() => toggleDone(index)}
                  >
                    {todo.done ? "Undo" : "Done"}
                  </button>

                  <button
                    className="deleteBtn"
                    onClick={() => deleteTodo(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;