import React from 'react';
import { inputTask, addTask } from '../Actions/tasks';

const TodoApp = ({ store }: { store: any }) => {
  const { task, tasks } = store.getState();

  return (
    <div>
      <input
        type="text"
        onChange={e => store.dispatch(inputTask(e.target.value))}
      />
      <input
        type="button"
        value="add"
        onClick={() => store.dispatch(addTask(task))}
      />
      <ul>
        {tasks.map(function(item: any, i: any) {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default TodoApp;
