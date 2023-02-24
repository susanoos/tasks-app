import React, { useState } from "react";
import AddTasks from "./AddTasks";
import TaskList from "./TaskList";

const Tasks = ({ tasks, showAddTasks, hideAddTasks }) => {
  const [taskList, setTaskList] = useState(tasks);

  const newTasks = async (newTask) => {
    const response = await fetch(
      "https://task-app-32c81-default-rtdb.firebaseio.com/tasks.json",
      {
        method: "POST",
        body: JSON.stringify(newTask),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
  };

  return (
    <div>
      {showAddTasks && (
        <AddTasks
          hideAddTasks={hideAddTasks}
          tasksList={tasks}
          addNewTasks={newTasks}
        />
      )}
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Tasks;
