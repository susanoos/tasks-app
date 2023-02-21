import React, { useState } from "react";
import AddTasks from "./AddTasks";
import TaskList from "./TaskList";

const Tasks = ({ tasks, showAddTasks, hideAddTasks }) => {
  const [taskList, setTaskList] = useState(tasks);

  const newTasks = (newTask) => {
    setTaskList((prevList) => [...prevList, newTask]);
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
      <TaskList tasks={taskList} />
    </div>
  );
};

export default Tasks;
