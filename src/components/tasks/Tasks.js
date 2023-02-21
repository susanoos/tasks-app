import React from "react";
import AddTasks from "./AddTasks";
import TaskList from "./TaskList";

const Tasks = ({ tasks, showAddTasks }) => {
  return (
    <div>
      {showAddTasks && <AddTasks />}
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Tasks;
