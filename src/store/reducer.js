import { ADD_TASK, DELETE_TASK, DID_TASK } from './types';

const initialState = {
  tasks: [
    { task: 'HTML I', done: true, id: '1' },
    { task: 'CSS', done: true, id: '2' },
    { task: 'Responsive design', done: true, id: '3' },
  ],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            task: action.payload,
            done: false,
            id: Math.random().toString(),
          },
        ],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((item) => item !== action.payload),
      };
    case DID_TASK:
      return {
        ...state,
        tasks: state.tasks.map((item) => {
          if (item.id !== action.payload) {
            return item;
          }
          return {
            ...item,
            done: true,
          };
        }),
      };
    default:
      return state;
  }
};
export default taskReducer;
