import React from 'react';
import allTodos from '../reducers/selectors';

module.exports = ({todos}) => (<ul>
  {todos}
</ul>);
