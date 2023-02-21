import React from "react";
import classes from "../../styles/AddTasks.module.css";

const AddTasks = () => {
  return (
    <form className={classes.add__tasks__container}>
      <label>Add Tasks</label>
      <div className={classes.input__container}>
        <input
          type="text"
          placeholder="Add task"
          className={classes.add__tasks__input}
        />
        <button type="submit" className={classes.btn__add__tasks}>
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTasks;
