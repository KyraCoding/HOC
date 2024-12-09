
# HOC React Tutorial

## Part 3: Rebuilding in React

### By [Oliver Leung](https://github.com/kyracoding)

  

## Table of Contents

1. [Overview](#overview)
2. [Setup](#setup)
3. [Setting up React](#reactsetup)
4. [Coding in React](#reactcode)
5. [Thinking in Components](#components)
6. [Recap](#recap)

  

## <a id="overview">Overview</a>

Welcome back! In this article, we'll be rebuilding our Todo website using React. Let's get started!

## <a id="setup">Setup</a>
As you've probably noticed, we're using React which requires Node.js If you already have Node.js installed, you can skip this step. If you don't, follow the instructions below.
1. First, you'll need to have Node.js installed. You can download it [here](https://nodejs.org/en/).
2. Double check that you've installed Node.js by running `node -v` in your terminal. You should see a version number (like `v20.17.0`)
3. All done!
## <a id="reactsetup">Setting up React</a>
Did you think we were done setting up? Not quite! We still need to set up React. Create a new folder (preferably not the same one your first project is in) and open it in the editor of your choice. I'll be using VSCode. Open up your terminal and make sure it's in the folder you just created. Run the following command:
```bash
npx create-react-app todo-react
```
This command does take a bit of time to run and you might see some error messages. Don't worry, this usually isn't an issue. Once it's done, you should see a new folder called "todo-react". If you open up that folder, you'll see a starter React project. If you aren't used to Node.js, you might be a bit overwhelmed. Let's break down what each file/folder does:
- `node_modules`: This folder contains all the dependencies that your project needs. You don't need to worry about this folder.
- `public`: This folder contains static assets (like logos and favicons) as well as a `index.html` file that serves as the base for your React app. 
- `src`: This folder contains all the code for your React app. You'll be spending most of your time here and I'll explain more about the files later.
- `.gitignore`: This file tells Git which files to ignore when you're pushing your code to a repository. Don't worry about this.
- `package.json`: This file contains metadata about your project and the dependencies you're using. Dont worry about this.
- `package-lock.json`: This file contains the exact version of each dependency you're using. Don't worry about this.
- `README.md`: This file allows you to describe or document your project. If you want to publish your project, you can edit this to give your users more information about your project. 
Now, navigate to the `src` folder and find a file called `reportWebVitals.js`. Replace the contents of this file with the following code:
```js
const reportWebVitals = onPerfEntry => {
};

export default reportWebVitals;
```
This file is used to report web vitals to Google Analytics, which we won't be using in this project.
Since we'll be using tailwindcss, we need to install it. Open your terminal again and run the following command:
```bash
npm install -D tailwindcss
```
Now, we can initialize tailwindcss by running the following command:
```bash
npx tailwindcss init
```
You should see a `tailwind.config.js` file in your project.
Open up the `tailwind.config.js` file and find the following line: 
```js
content: [],
``` 
Replace it with the following code:
```js
content: [
    "./src/**/*.js",
  ],
```
This allows Tailwind to know which files to style.
Then, find the following line:
```js
theme: {
  extend: {},
},
```
Replace it with the following code:
```js
theme: {
  extend: {
    extend: {
      fontFamily: {
          roboto: ['Roboto Mono', 'monospace'],
      },
    }
  },
},
```
That allows us to import the Roboto Mono font in our project.
In the `src` folder, you should see a file called `index.css`. Since we're using Tailwind to style our project, replace the contents of the file with:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
You should also see a file called `App.css`. Delete this file as we won't be using it.
To finish setting up, go to the `public` folder and open the `index.html` file. 
Find the following line:
```html
<title>React App</title>
```
Replace it with the following code:
```html
<title>My Todo App</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
    rel="stylesheet">
```
This changes the title of our website as well as importing the Roboto Mono font.
Now, we're ready to start coding!
## <a id="reactcode">Coding in React</a>
There's a lot of files in the `src` folder, but we'll only be focusing on a few. Open up the `App.js` file and replace the contents with the following code:
```js
function App() {
  return (
    <div className="font-roboto">
      <p>Hello, World!</p>
    </div>
  );
}

export default App;
```
This might seem super confusing, so let me explain. React allows you to combine HTML and JavaScript. `App.js` is the main file that React uses to render your website. Basically, the `App()` function is returning the code that makes up your website. Here, we're returning a `<div>` with a `<p>` child element with the words, "Hello, World!". If you're still confused, think of `App.js` like your `index.html` file from the project we built last article. 
Let's run your project! Open up your terminal and make sure it's in the `todo-react` folder. Run the following command:
```bash
npm start
```
You should see a message saying "Compiled successfully!" and your default browser should open up with your website. You should see the words, "Hello, World!" on the screen. Now, let's migrate the code from our previous project to this one. 
Replace the contents of `App.js` with the following code:
```js
function App() {
  return (
    <div className="font-roboto">
      <h1 className="text-4xl ml-10 text-center">My Todo App</h1>
      <div className="mt-10 flex flex-col items-center">
        <div className="flex mb-6">
          <input type="text" id="input" className="bg-gray-600 rounded px-4 py-1 mr-4 text-white"
            placeholder="Enter your todo list..."/>
            <button className="text-white bg-blue-400 hover:bg-blue-600 transition duration-150 rounded p-2"
              id="add">Add</button>
        </div>
        <div id="list" className="w-1/2 rounded-xl bg-gray-600 p-8 gap-4 flex flex-col">
          <p id="empty" className="text-white text-center mt-4">Your todo list will appear here...</p>
        </div>
      </div>
    </div>
  );
}

export default App;
```
Theres a few things here to note:
- Notice that instead of using `class`, we're using `className`. Using `class` won't function properly in React, so make sure you're always using `className`.
- Secondly, we don't import `script.js`. That's because React allows you to integrate JavaScript directly into your HTML, so there's no need for a separate JS file.

Save your file and your website should update automatically. You'll see the same website you built in the previous article. However, we haven't implemented any functionality yet. Let's do that now.
## <a id="components">Thinking in Components</a>
Remember how one of the issues of vanilla JavaScript was the amount of code needed to make a simple todo item? React allows you to make components which make it a lot easier to manage your code. We can create a `Todo` component by creating a `Todo.js` file in the `src` folder. Add the following code:
```js
import React from 'react';
function Todo({value}) {
    return (
        <div className="w-full bg-blue-400 rounded flex items-center gap-4">
            <p className='p-2 items-center flex text-white w-3/4'>{value}</p>
            <button className="p-2 w-1/4 items-center text-white bg-red-400 hover:bg-red-600 transition duration-150 rounded">Delete</button>
        </div>
    )
}
export default Todo;
```
This component takes in a value, in this case whatever the user enters into the form, and returns a `Todo` component with the value. Notice that this is the same HTML created in the previous article, but it takes up significantly less lines. Instead of needing to write a bunch of `createElement()` calls, we can simply write the component in HTML. 
Now we can import our component. Open up `App.js` and add the following code to the top of the file:
```js
import Todo from './Todo';
```
Now, to add our component, we need to create a state. Believe it or not, you're already familiar with the idea of States. States are basically variables that allow you to set and get values. However, States are special because they can trigger functions whenever they change. Let's import `useState` from React and create a state for our todo list. Add the following code to the top of the `App.js` file:
```js
import { useState } from 'react';
```
Then, right under the `App()` function, add the following code:
```js
const [todos, setTodos] = useState([]);
```
This creates a State called `todos` and a function called `setTodos`. `useState([])` means we want to create a State object with an empty array. If we want to get the value of `todos`, we can simply call `todos`. If we want to change the value of `todos`, we can call `setTodos()`. (Example: `setTodos(['Hello', 'World'])`).
Underneath that, add the following code:
```js
const [inputValue, setInputValue] = useState('');
```
This is another State object called `inputValue` and a function called `setInputValue`. You might notice that `useState()` is different from the previous one. This time, we're setting the initial value of `inputValue` to an empty string (`''`).
Your code should look like this:
```js
import { useState } from 'react';
import Todo from './Todo';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  ...
```
Let's create a function that adds a todo item to our list. Add the following code underneath the `useState` declarations:
```js
function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };
  ...
```
Basically, whenever the `addTodo()` function is called, if the `inputValue` state isn't empty, it adds `inputValue` to the `todos` state array and calls `setInputValue` to set `inputValue` to an empty string.
Now, let's update our HTML code. Replace the `return` function with the following code:
```js
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
              key={index}
              value={todo}
            />
          ))
        )}
      </div>
    </div>
  </div>
);
```
Let's explain what's happening here:
```js
<input
  type="text"
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
  id="input"
  className="bg-gray-600 rounded px-4 py-1 mr-4 text-white"
  placeholder="Enter your todo list..."
/>
```
This is the input field that allows users to enter their todo list. The `value` attribute is set to `inputValue`, which is the state we created earlier. When the user types into the input field, the `onChange` event is triggered and calls `setInputValue` to update the `inputValue` state.
```js
<button
  onClick={addTodo}
  className="text-white bg-blue-400 hover:bg-blue-600 transition duration-150 rounded p-2"
  id="add"
>
  Add
</button>
```
This is the button that adds the todo item to the list. When the button is clicked, the `onClick` event is triggered and calls the `addTodo` function.
```js
<div id="list" className="w-1/2 rounded-xl bg-gray-600 p-8 gap-4 flex flex-col">
  {todos.length === 0 ? (
    <p id="empty" className="text-white text-center mt-4">
      Your todo list will appear here...
    </p>
  ) : (
    todos.map((todo, index) => (
      <Todo
        key={index}
        value={todo}
      />
    ))
  )}
</div>
```
Finally, this is where we display the todo list. If the `todos` array is empty, it displays a message saying, "Your todo list will appear here...". If there are items in the `todos` array, it iterates through the `todos` state array and creates a `Todo` component for each item. The `key` attribute is used to uniquely identify each item in the list, which will allow us to delete items.
Save your changes and now you should be able to add todo items to your list. However, we haven't implemented the delete functionality yet. Let's do that now.
Add this function underneath the `addTodo` function:
```js
const deleteTodo = (index) => {
  const newTodos = todos.filter((_, i) => i !== index);
  setTodos(newTodos);
};
```
This function takes in an index and removes it from the `todos` state array. Remember that States automatically trigger updates whenever their value changes, so removing an index from a state array will also remove the corresponding index from the todo list.
Let's pass in our `onDelete()` function to the `Todo` component. Update the `App.js` file with the following code:
```js
todos.map((todo, index) => (
  <Todo
    onDelete={() => deleteTodo(index)}
    key={index}
    value={todo}
  />
))
```
And update the `Todo` component to call the `onDelete()` function with the following code:
```js
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
```
Save your project and now your project should be fully functional!
## <a id="recap">Recap</a>
We did a lot in this article so let's recap:
- We learned how to create a React project
- We learned what and how to use Components and States
- We learned how to create functions that can update States and create Components
## See you in the next article