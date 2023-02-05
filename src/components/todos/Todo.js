import React from "react";
import "../styles/Todo.css";
import TodoForm from "./TodoForm";

const Todo = (props) => {
  return (
    <div className="todo-container">
      <h1 className="todo-heading__text">Todo App</h1>
      <TodoForm />
      <div className="todo-grid">
        <h2>{props.todoList[0].title}</h2>
        <h2>{props.todoList[1].title}</h2>
        <h2>{props.todoList[2].title}</h2>
      </div>
    </div>
  );
};

export default Todo;
