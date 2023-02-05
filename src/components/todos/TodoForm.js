import React, { useState } from "react";
import "../styles/TodoForm.css";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setTitle("");
  };

  const changeHandler = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form className="todo-form__container" onSubmit={submitHandler}>
      <label className="add-todo__heading">Add Todo</label>
      <div className="todo-form__input__container">
        <input
          className="add-todo__input"
          type="text"
          placeholder="Todo"
          onChange={changeHandler}
          value={title}
        />
        <button type="submit" className="add-todo__button">
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
