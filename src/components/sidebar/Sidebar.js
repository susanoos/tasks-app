import React from "react";
import classes from "../../styles/Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPen, faGear } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ showAddTasks }) => {
  const handleClick = (e) => {
    e.preventDefault();
    showAddTasks(true);
  };
  return (
    <div className={classes.sidebar}>
      <ul className={classes.sidebar__list}>
        <li className={classes.sidebar__header}>Task App</li>
        <div className={classes.sidebar__links__container}>
          <li>
            <a href="/" className={classes.sidebar__links}>
              <FontAwesomeIcon icon={faHouse} size="xs" />
              Home
            </a>
          </li>
          <li>
            <a
              href="/"
              className={classes.sidebar__links}
              onClick={handleClick}
            >
              <FontAwesomeIcon icon={faPen} size="xs" />
              New Task
            </a>
          </li>
          <li>
            <a href="/" className={classes.sidebar__links}>
              <FontAwesomeIcon icon={faGear} size="xs" />
              Settings
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
