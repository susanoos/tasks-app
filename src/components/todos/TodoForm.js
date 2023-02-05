import React from "react";
import "../styles/TodoForm.css";

const TodoForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const changeHandler = (e) => {
    console.log(e.target.value);
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
        />
        <button type="submit" className="add-todo__button">
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
