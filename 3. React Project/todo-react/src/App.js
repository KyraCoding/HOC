import { useState } from 'react';
import Todo from './Todo';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };
  return (
    <div className="font-roboto">
      <h1 className="text-4xl ml-10 text-center">My Todo App</h1>
      <div className="mt-10 flex flex-col items-center">
        <div className="flex mb-6">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            id="input"
            className="bg-gray-600 rounded px-4 py-1 mr-4 text-white"
            placeholder="Enter your todo list..."
          />
          <button
            onClick={addTodo}
            className="text-white bg-blue-400 hover:bg-blue-600 transition duration-150 rounded p-2"
            id="add"
          >
            Add
          </button>
        </div>
        <div id="list" className="w-1/2 rounded-xl bg-gray-600 p-8 gap-4 flex flex-col">
          {todos.length === 0 ? (
            <p id="empty" className="text-white text-center mt-4">
              Your todo list will appear here...
            </p>
          ) : (
            todos.map((todo, index) => (
              <Todo
                onDelete={() => deleteTodo(index)}
                key={index}
                value={todo}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;