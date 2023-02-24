import React, { Fragment } from "react";
import classes from "../../styles/TaskList.module.css";

const TaskList = ({ tasks }) => {
  const deleteTask = async (id) => {
    const response = await fetch(
      `https://task-app-32c81-default-rtdb.firebaseio.com/tasks.json/${id}`,
      {
        method: "DELETE",

        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
  };
  const deleteHandler = (e) => {
    e.preventDefault();
    const id = e.target.id;
    deleteTask(id);
    console.log(id);
  };
  const tasksList = tasks
    .map((task) => {
      return (
        <Fragment key={task.id}>
          <div className={classes.form__list}>
            <li className={classes.tasks}>
              {task.task}
              <div className={classes.btn__container}>
                <button className={classes.btn__tasks}>Edit</button>
                <button
                  className={classes.btn__tasks}
                  onClick={deleteHandler}
                  id={task.id}
                >
                  Delete
                </button>
              </div>
            </li>
          </div>
        </Fragment>
      );
    })
    .reverse();

  const showTaskList =
    tasks.length !== 0 ? (
      tasksList
    ) : (
      <p className={classes.add__tasks__text}>Add some tasks</p>
    );
  return <ul className={classes.form__container}>{showTaskList}</ul>;
};

export default TaskList;
