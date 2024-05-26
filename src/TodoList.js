import React from 'react';
import Todo from './Todo';

function TodoList({ todos }) {
    return (
        todos.map(todo => {
            return <Todo todo={todo} />
        })
    )
}

export default TodoList;