import React from 'react'
import { useState, useEffect } from 'react'
import Taskform from './component/TaskForm'
import TaskList from './component/TaskList'
import ProgressTracker from './component/ProgressTracker'
import './style.css'

function App() {
const [tasks, setTasks] = useState([]);

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

const addTask = (newTask)=>{
  setTasks([...tasks,newTask])
};

const updateTask = (index, updatedTask) => {
  const newTasks = [...tasks];
  newTasks[index] = updatedTask;
  setTasks(newTasks);
};

const deleteTask = (index) => {
  setTasks(tasks.filter((_, i) => i !== index));
};

const clearTasks = () => {
  setTasks([]);
};

  return (
    <div className='App'>
      <header className="bg-gray-900 py-6 px-4 shadow-md">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <h1 className="text-4xl font-bold text-white">
          Task<span className="text-yellow-400">Buddy</span>
        </h1>
        <p className="text-gray-400 italic">Your friendly task manager</p>
      </div>
    </header>
      <Taskform addTask={addTask}/>
     <ProgressTracker tasks={tasks} />
     <TaskList tasks={tasks}
     updateTask={updateTask}
     deleteTask={deleteTask} />

      {tasks.length>0 && (
      <button className="clear-btn" onCLick={clearTasks}>
        CLear All Tasks
      </button>
     )}   
    </div>
  );
}

export default App;
