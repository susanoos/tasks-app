import React, { useState } from "react";
import "./styles/App.css";

import Sidebar from "./components/sidebar/Sidebar";
import Tasks from "./components/tasks/Tasks";

const dummyTasks = [
  {
    id: 1,
    task: "Learn React",
  },
  {
    id: 2,
    task: "Learn Express",
  },
  {
    id: 3,
    task: "Learn MongoDB",
  },
];

const App = () => {
  const [addTask, setAddTask] = useState(false);

  return (
    <div>
      <Sidebar showAddTasks={setAddTask} />
      <Tasks
        tasks={dummyTasks}
        showAddTasks={addTask}
        hideAddTasks={setAddTask}
      />
    </div>
  );
};

export default App;
