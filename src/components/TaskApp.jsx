import React from "react";

import styles from "./taskApp.module.css";
import AddTask from "./AddTask/AddTask"
import Tasks from "./Tasks/Tasks";
import TaskHeader from "./TaskHeader/TaskHeader";

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/*<TaskHeader />*/}
      <AddTask />
      <Tasks />
    </div>
  );
};

export default TaskApp;
