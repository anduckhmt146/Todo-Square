import React, { useState, useEffect } from 'react';

const TodoCard = ({ category, urgency }) => {
  const storedTasks = JSON.parse(localStorage.getItem(category)) || [];
  const [taskList, setTaskList] = useState(storedTasks);
  const [newTask, setNewTask] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [editText, setEditText] = useState('');

  useEffect(() => {
    localStorage.setItem(category, JSON.stringify(taskList));
  }, [taskList, category]);

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTaskList([...taskList, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
  };

  const startEditing = (index) => {
    setEditIndex(index);
    setEditText(taskList[index]);
  };

  const cancelEditing = () => {
    setEditIndex(-1);
    setEditText('');
  };

  const saveEdit = () => {
    if (editText.trim() !== '') {
      const updatedTasks = [...taskList];
      updatedTasks[editIndex] = editText;
      setTaskList(updatedTasks);
      setEditIndex(-1);
      setEditText('');
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg flex flex-col space-y-4">
      <h2 className="text-xl font-bold">{category}</h2>
      <p className="text-sm text-gray-500">{urgency}</p>
      <ul className="space-y-2">
        {taskList.map((task, index) => (
          <li
            key={index}
            className="flex flex-col sm:flex-row justify-between items-center bg-gray-100 rounded-lg p-2">
            {editIndex === index ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="flex-grow border-2 border-gray-200 p-1 rounded"
              />
            ) : (
              <div className="lg:flex-grow lg:flex items-center justify-between">
                <span className="break-all">{task}</span>
                <div className="flex space-x-1 lg:ml-2 my-2">
                  <button
                    onClick={() => startEditing(index)}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded text-xs sm:text-sm">
                    Edit
                  </button>
                  <button
                    onClick={() => removeTask(index)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs sm:text-sm">
                    Remove
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="flex flex-col md:flex-row mt-4 space-y-2 md:space-y-0 md:space-x-2">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-grow border-2 border-gray-200 py-1 px-2 rounded-lg"
          placeholder="Add a task"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs sm:text-sm">
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
