import React from 'react';
import TodoCard from './ToDoCard';

const TodoGrid = () => {
  const initialTasks = {
    do: [],
    decide: [],
    delegate: [],
    delete: [],
  };

  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const today = new Date();
  const dayName = daysOfWeek[today.getDay()];

  const dateString = today.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  const fullDateString = `${dayName} - ${dateString}`;

  return (
    <div className="bg-gray-100">
      <p className="text-xl px-8 pt-4 text-blue-500">{`${fullDateString}`}</p>
      <div className="grid grid-cols-2 gap-4 p-8">
        <TodoCard category="DO" urgency="Do it now." tasks={initialTasks.do} />
        <TodoCard
          category="DECIDE"
          urgency="Schedule a time to do it."
          tasks={initialTasks.decide}
        />
        <TodoCard
          category="DELEGATE"
          urgency="Who can do it for you?"
          tasks={initialTasks.delegate}
        />
        <TodoCard
          category="DELETE"
          urgency="Eliminate it."
          tasks={initialTasks.delete}
        />
      </div>
    </div>
  );
};

export default TodoGrid;
