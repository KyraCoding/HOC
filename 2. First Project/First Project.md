# HOC React Tutorial

## Part 2: Building our first project

### By [Oliver Leung](https://github.com/kyracoding)

## Table of Contents
1. [Overview](#overview)
2. [Setup](#setup)
3. [Building The Application](#building)
4. [Limitations](#limitations)
5. [Recap](#recap)

## <a id="overview">Overview</a>
Welcome back! In this article, we'll be making a simple Todo website using vanilla JavaScript and Tailwind CSS for styling. Let's get started!

## <a id="setup">Setup</a>
No setup needed!

## <a id="building">Building The Application</a>
Create a folder called "JavaScript-Todo" and create an `index.html` file inside it. Add the following code to the file:

```html
<html>

<head>
    <title>My Todo App</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
        rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        roboto: ['Roboto Mono', 'monospace'],
                    },
                }
            }
        }
    </script>
</head>

<body class="font-roboto p-4 h-full w-full">
    <h1 class="text-4xl ml-10 text-center">My Todo App</h1>
    <div class="mt-10 flex flex-col items-center">
        <div class="flex mb-6">
            <input type="text" id="input" class="bg-gray-600 rounded px-4 py-1 mr-4 text-white"
                placeholder="Enter your todo list...">
            <button class="text-white bg-blue-400 hover:bg-blue-600 transition duration-150 rounded p-2"
                id="add">Add</button>
        </div>
        <div id="list" class="w-1/2 rounded-xl bg-gray-600 p-8 gap-4 flex flex-col">
            <p id="empty" class="text-white text-center mt-4">Your todo list will appear here...</p>
        </div>
    </div>
    <script src="script.js"></script>
</body>

</html>
```
You probably have a pretty good knowledge of HTML already, so I won't go into too much detail about it. If you open up the HTML file, you should see a simple Todo app with a text input and a button to add items to the list. But if you actually try to add an item, nothing happens because we haven't added any JavaScript yet. Let's do that now.
```javascript
// Triggers when add button is clicked
document.getElementById("add").addEventListener("click", function () {
    // Get the value of the input box
    var value = document.getElementById("input").value;
    var list = document.getElementById("list");

    // If the value is not empty
    if (value) {
        // Clear the input box
        document.getElementById("input").value = "";

        // Creating the todo item
        var todobody = document.createElement("div");
        todobody.className = "w-full bg-blue-400 rounded flex";

        var todobodytext = document.createElement("p");
        todobodytext.className = "p-2 items-center flex text-white w-3/4";
        todobodytext.textContent = value;
        todobody.appendChild(todobodytext);

        var tododelte = document.createElement("button");
        tododelte.className = "p-2 w-1/4 items-center text-white bg-red-400 hover:bg-red-600 transition duration-150 rounded";
        tododelte.textContent = "Delete";

        // Delete the todo item when delete button is clicked
        tododelte.addEventListener("click", function () {
            todobody.remove();
            console.log(list.children.length);
            if (list.children.length == 1) {
                document.getElementById("empty").style.display = "block";
            }
        });

        // Hide the "Your todo list will appear here..." message
        document.getElementById("empty").style.display = "none";
        todobody.appendChild(tododelte);

        // Append the todo item to the list
        list.appendChild(todobody);
    }
});
```
Let's walk through the code:
First, we attach an event listener to the "add" button.
We get the value of the input box with `var value = document.getElementById("input").value;`. 
If value isn't empty, we create a todo item with a delete button and append it to the list.
The delete button has the function
```javascript
tododelte.addEventListener("click", function () {
            todobody.remove();
            console.log(list.children.length);
            if (list.children.length == 1) {
                document.getElementById("empty").style.display = "block";
            }
        });
```
which removes the todo item from the list and checks if the list is empty. If it is, it displays the message "Your todo list will appear here...".
Simple, right?
## <a id="limitations">Limitations</a>
Although that was a pretty simple project, we can already notice some issues.
Firstly, we don't many features. What if the user wants to add a description or additional information like a time or location? We could solve that by adding more input fields and divs, but that leads to our second issue: the code is getting messy already. If we look back at our JavaScript code, **most of our code isn't on app functionality, instead it's creating the elements that make up the todo list**. If we wanted to add more features, we'd have to create more elements, which is not only tedious but also makes our code harder to read and debug. 
## <a id="recap">Recap</a>
Let's recap:
- We built a simple Todo app using vanilla JavaScript and Tailwind CSS
- We noticed some limitations with vanilla JavaScript
## See you in the next article!