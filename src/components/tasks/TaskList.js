import React from "react";
import classes from "../../styles/TaskList.module.css";

const TaskList = ({ tasks }) => {
  const tasksList = tasks.map((task) => {
    return (
      <ul className={classes.form__list} key={task.id}>
        <li className={classes.tasks}>{task.title}</li>
        <button>Edit</button>
        <button>Delete</button>
      </ul>
    );
  });
  return <div className={classes.form__container}>{tasksList}</div>;
};

export default TaskList;
