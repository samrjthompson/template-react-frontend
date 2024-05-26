import React from 'react';

function Todo( props ) {
    return (
        <div className="text-bold">
            { props.todo }
        </div>
    )
}

export default Todo;