import React, { useState } from "react";
import "./styles/App.css";
import TaskList from "./components/tasks/TaskList";
import Sidebar from "./components/sidebar/Sidebar";

const dummyTasks = [
  {
    id: 1,
    title: "Learn React",
  },
  {
    id: 2,
    title: "Learn Express",
  },
  {
    id: 3,
    title: "Learn MongoDB",
  },
];

const App = () => {
  return (
    <>
      <div>
        <Sidebar />
        <TaskList tasks={dummyTasks} />
      </div>
    </>
  );
};

export default App;
