import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
  const { todos } = useSelector(state => state);
  const [showCompletedTasks, setShowCompletedTasks] = useState(false);
  const [showTasksToDo, setShowTasksToDo] = useState(true);

  const doneTasks = todos.filter(task => task.isDone);
  const notDoneTasks = todos.filter(task => !task.isDone);

  const toggleCompletedTasks = () => {
    setShowCompletedTasks(true);
    setShowTasksToDo(false);
  };

  const toggleTasksToDo = () => {
    setShowCompletedTasks(false);
    setShowTasksToDo(true);
  };

  return (
    <div className='list task'>
      <div>
        <button className='tasks-btn' id='btn-undone' onClick={toggleTasksToDo}>Tasks To Do</button>
        <button className='tasks-btn' id='btn-done' onClick={toggleCompletedTasks}>Completed Tasks</button>
      </div>
      {showCompletedTasks && (
        <div>
          <h3>Completed Tasks:</h3>
          {
          React.Children.toArray(doneTasks.map(task => (
            <Task  task={task} />
          )))}
        </div>
      )}
      {showTasksToDo && (
        <div>
          <h3>Tasks To Do:</h3>
          {
          React.Children.toArray(notDoneTasks.map(task => (
            <Task  task={task} />
          )))}
        </div>
      )}
    </div>
  );
};

export default ListTask;
