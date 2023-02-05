import React from "react";
import "../styles/Todo.css";
import NewTodo from "./NewTodo";
import TodoForm from "./TodoForm";

const Todo = (props) => {
  const renderTodos = props.todoList.map((todo) => <h2>{todo.title}</h2>);
  return (
    <div className="todo-container">
      <div className="todo-grid">{renderTodos}</div>
    </div>
  );
};

export default Todo;
