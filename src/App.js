import React, { useState, useEffect } from "react";
import "./styles/App.css";

import Sidebar from "./components/sidebar/Sidebar";
import Tasks from "./components/tasks/Tasks";

const dummyTasks = [
  // {
  //   id: 1,
  //   task: "Learn React",
  // },
  // {
  //   id: 2,
  //   task: "Learn Express",
  // },
  // {
  //   id: 3,
  //   task: "Learn MongoDB",
  // },
];

const App = () => {
  const [addTask, setAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchTasks = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://task-app-32c81-default-rtdb.firebaseio.com/tasks.json"
      );
      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      console.log(data);
      const transformedTasks = Object.entries(data).map(([key, value]) => {
        return {
          id: key,
          ...value,
        };
      });
      console.log(transformedTasks);
      setIsLoading(false);
      setTasks(transformedTasks);
    } catch {
      setIsLoading(false);
    }
  };
  // testFetch();
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <Sidebar showAddTasks={setAddTask} />
      {isLoading ? (
        <h1 className="is__loading">Loading Tasks...</h1>
      ) : (
        <Tasks tasks={tasks} showAddTasks={addTask} hideAddTasks={setAddTask} />
      )}
    </div>
  );
};

export default App;
