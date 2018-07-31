import React from 'react';
import {allTodos} from '../../reducers/selectors';
import {TodoListItem} from './todo_list_item';
import {TodoForm} from './todo_form';
// module.exports = ({todos}) => (<ul>
//   Hello again
// </ul>);

export const TodoList = ({todos,receiveTodo}) => {
  // const { todos } = props;
  return (
    <div>
      <ul>
        {todos.map( (todo) => {
          return <TodoListItem key={todo.id} todo={todo}/>;
        })}
      </ul>
      <TodoForm receiveTodo={receiveTodo} />
    </div>);
  };
