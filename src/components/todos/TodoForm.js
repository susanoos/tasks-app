import React, { useState } from "react";
import "../styles/TodoForm.css";

const TodoForm = (props) => {
  const [title, setTitle] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      title: title,
    };

    props.onSaveTodo(newTodo);
    setTitle("");
  };

  // clearing input field
  return (
    <div className="container">
      <h1 className="todo-heading__text">Todo App</h1>
      <form className="todo-form__container" onSubmit={submitHandler}>
        <label className="add-todo__heading">Add Todo</label>
        <div className="todo-form__input__container">
          <input
            className="add-todo__input"
            type="text"
            placeholder="Todo"
            onChange={titleChangeHandler}
            value={title}
          />
          <button type="submit" className="add-todo__button">
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
