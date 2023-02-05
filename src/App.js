import React, { useState } from "react";
import "./components/styles/App.css";
import NewTodo from "./components/todos/NewTodo";
import Todo from "./components/todos/Todo";

const dummy_todo = [
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

const App = () => {
  const [todos, setTodos] = useState(dummy_todo);

  const todoHandler = (todo) => {
    setTodos((prevTodo) => [todo, ...prevTodo]);
  };

  return (
    <div>
      <NewTodo onAddTodo={todoHandler} />
      <Todo todoList={todos} />
    </div>
  );
};

export default App;
