import {RECEIVE_TODO, RECEIVE_TODOS} from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: 'feed dog',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'do laundry',
    body: 'with dog food',
    done: true
  },
};


const todosReducer = (state = initialState, action) => {
  let newState;
  switch(action.type) {
    case RECEIVE_TODOS:
    newState = {};
    action.todos.forEach ( (todo) => {
      newState[todo.id] = todo;
    });
    return newState;
    case RECEIVE_TODO:
      newState = Object.assign({}, state, {[action.todo.id]: action.todo});
      return newState;
    default:
    return state;
  }
};

export default todosReducer;
