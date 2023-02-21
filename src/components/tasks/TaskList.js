import React, { Fragment } from "react";
import classes from "../../styles/TaskList.module.css";

const TaskList = ({ tasks }) => {
  const tasksList = tasks
    .map((task) => {
      return (
        <Fragment key={task.id}>
          <div className={classes.form__list}>
            <li className={classes.tasks}>
              {task.title}
              <div className={classes.btn__container}>
                <button className={classes.btn__tasks}>Edit</button>
                <button className={classes.btn__tasks}>Delete</button>
              </div>
            </li>
          </div>
        </Fragment>
      );
    })
    .reverse();

  return <ul className={classes.form__container}>{tasksList}</ul>;
};

export default TaskList;
