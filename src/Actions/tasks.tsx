export const inputTask = (task: any) => ({
  type: 'INPUT_TASK',
  payload: {
    task
  }
});

export const addTask = (task: any) => ({
  type: 'ADD_TASK',
  payload: {
    task
  }
});
