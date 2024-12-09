import React from 'react';
function Todo({value, onDelete}) {
    return (
        <div className="w-full bg-blue-400 rounded flex items-center gap-4">
            <p className='p-2 items-center flex text-white w-3/4'>{value}</p>
            <button onClick={onDelete} className="p-2 w-1/4 items-center text-white bg-red-400 hover:bg-red-600 transition duration-150 rounded">Delete</button>
        </div>
    )
}
export default Todo;