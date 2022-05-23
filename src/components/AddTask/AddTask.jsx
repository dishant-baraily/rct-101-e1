import React, { useState } from "react";
import Counter from "../Counter/Counter";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [task, setTask] = useState("");
  const [add, setAdd] = useState([]);
  const handleChange = (e) => {
    setTask(e.target.value);
  }
  const handleClick = () => {
    setAdd([...add,task]);
  }
  return (
    <div className={styles.todoForm}>
      <div className={styles.heading}>
          <h1>Todo List</h1> <h3>You have 3 of 5 tasks remaining</h3>
      </div>
      <input data-cy="add-task-input" type="text" placeholder="     Add task..." onChange={handleChange} />
      <button data-cy="add-task-button" onClick={handleClick}>+</button>
      <hr />
      {add.map((item) => {
        return <div>{item}</div>
      })}
    </div>
  );
};

export default AddTask;
