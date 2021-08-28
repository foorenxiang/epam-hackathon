import { ADD_TASK, DELETE_TASK, DID_TASK, LOAD_LOGS } from './types';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});
export const deleteTask = (task) => ({
  type: DELETE_TASK,
  payload: task,
});
export const didTask = (id) => ({
  type: DID_TASK,
  payload: id,
});

export const loadLogs = (logs) => ({
  type: LOAD_LOGS,
  payload: logs,
});
