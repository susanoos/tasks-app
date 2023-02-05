import React from "react";
import TodoForm from "./TodoForm";

const NewTodo = (props) => {
  const saveTodo = (enteredTodo) => {
    const newTodoData = {
      ...enteredTodo,
      id: Math.floor(Math.random() * 10),
    };
    props.onAddTodo(newTodoData);
  };
  return (
    <div>
      <TodoForm onSaveTodo={saveTodo} />
    </div>
  );
};

export default NewTodo;
