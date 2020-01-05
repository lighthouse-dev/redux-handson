import React from 'react';
import ReactDOM from 'react-dom';
import tasksReducer from './Reducers/tasks';
import TodoApp from './Components/TodoApp';
import './index.css';
import { createStore } from 'redux';

const store = createStore(tasksReducer);

const renderApp = (store: any) => {
  ReactDOM.render(<TodoApp store={store} />, document.getElementById('root'));
};

store.subscribe(() => renderApp(store));
renderApp(store);
