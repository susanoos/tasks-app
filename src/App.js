import React, { useState } from "react";
import "./components/styles/App.css";
import Todo from "./components/todos/Todo";

const App = () => {
  const todos = [
    {
      id: 1,
      title: "Learn React",
    },
    {
      id: 2,
      title: "Learn Redux",
    },
    {
      id: 3,
      title: "Learn MongoDB",
    },
  ];

  return (
    <div>
      <Todo todoList={todos} />
    </div>
  );
};

export default App;
