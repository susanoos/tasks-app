import React, { useState } from "react";
import classes from "../../styles/AddTasks.module.css";

const AddTasks = ({ hideAddTasks, addNewTasks }) => {
  const [newTask, setNewTask] = useState("");

  const handleClick = () => {
    hideAddTasks(false);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const addedTask = { task: newTask };
    addNewTasks(addedTask);
  };

  return (
    <form className={classes.add__tasks__container} onSubmit={handleSubmit}>
      <label>Add Tasks</label>
      <div className={classes.input__container}>
        <input
          type="text"
          placeholder="Add task"
          className={classes.add__tasks__input}
          onChange={handleChange}
          value={newTask}
        />
        <button type="submit" className={classes.btn__add__tasks}>
          Add
        </button>
        <button className={classes.btn__add__tasks} onClick={handleClick}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddTasks;
