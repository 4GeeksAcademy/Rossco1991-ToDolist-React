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
    <>
      <form className="index" onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <ul className="list-group">
          {todos.map((item, index) => (
              <li className="list-group-item"key={index}>{item}
              <span
                  className="btn btn-danger ms-5"
                  onClick={() => removeTodo(index)}
                >
                  <i className="fa-regular fa-circle-xmark fa-xs"></i>
                </span>
              </li>
          ))}
        </ul>
      </form>
      <p className="text-left ms-3">{todos.length} Left to do!</p>
      </>
  );
};
