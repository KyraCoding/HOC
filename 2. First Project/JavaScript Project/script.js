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