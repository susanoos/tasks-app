import React, { useState } from "react";
import "./styles/App.css";

import Sidebar from "./components/sidebar/Sidebar";
import Tasks from "./components/tasks/Tasks";

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
  const [addTask, setAddTask] = useState(false);
  console.log(addTask);

  return (
    <div>
      <Sidebar showAddTasks={setAddTask} />
      <Tasks tasks={dummyTasks} showAddTasks={addTask} />
    </div>
  );
};

export default App;
