import React from "react";
import { useState } from "react";

export const Input = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const newTodo = [...todos, input];
    setTodos(newTodo);
    setInput("");
  };
  
  const removeTodo = (idx) => {
    setTodos(todos.toSpliced(idx, 1));
  };

  return (
    <form className="index" onSubmit={handleSubmit}>
      <input
        className="form-control"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <ul className="list-group">
        {todos.map((item, index) => (
          <li key={index}>
            {item}
            <div className="btn btn-primary" onClick={() => removeTodo(index)}>
              Remove task
            </div>
          </li>
        ))}
      </ul>
    </form>
  );
};
