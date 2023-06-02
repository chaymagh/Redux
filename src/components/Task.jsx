import React from "react";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "../redux/action";
import { MdDelete } from "react-icons/md";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import EditTast from "./EditTast";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className={`theTask ${task.isDone ? 'isDone' : ''}`}>
      <span className="todo-text">{task.action}</span>
      <div className="btn">
        <button onClick={() => dispatch(completeTask(task.id))}>
          {task.isDone ? (
            <ImCheckboxChecked size={"26px"} /> 
          ) : (
            <ImCheckboxUnchecked size={"26px"} /> 
          )}
        </button>
        <EditTast task={task}/>
        <button id="delete" onClick={() => dispatch(deleteTask(task.id))}>
          <MdDelete size={"35px"} />
        </button>
      </div>
    </div>
  );
};

export default Task;
