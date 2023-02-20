import React from "react";
import classes from "../../styles/TaskList.module.css";

const TaskList = ({ tasks }) => {
  const tasksList = tasks.map((task) => {
    return (
      <ul key={task.id}>
        <li className={classes.form__list}>{task.title}</li>
      </ul>
    );
  });
  return <div className={classes.form__container}>{tasksList}</div>;
};

export default TaskList;
