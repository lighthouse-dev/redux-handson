import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';

const initialState = {
  task: '',
  tasks: []
};

const tasksReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'INPUT_TASK':
      return {
        ...state,
        task: action.payload.task
      };
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat(action.payload.task)
      };
    default:
      return state;
  }
};

const store = createStore(tasksReducer);

const inputTask = (task: any) => ({
  type: 'INPUT_TASK',
  payload: {
    task
  }
});

const addTask = (task: any) => ({
  type: 'ADD_TASK',
  payload: {
    task
  }
});

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

const renderApp = (store: any) => {
  ReactDOM.render(<TodoApp store={store} />, document.getElementById('root'));
};

store.subscribe(() => renderApp(store));
renderApp(store);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
