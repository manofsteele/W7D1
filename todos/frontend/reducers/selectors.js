
const allTodos = (state) => {
  // state.map((todo) => {
   return Object.keys(state.todos).map( (id) => {
      return state.todos[id];
    });
};

export default allTodos;
