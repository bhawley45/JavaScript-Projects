// Get task from input
function get_todos() {
    //Create an array of inputed tasks
    var todos = new Array;
    //pull task from browser memory
    var todos_str = localStorage.getItem(`todo`);

    //if input not null, parse string
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }

    return todos;
}

//add inputed task to get_todos function array
function add() {
    var task = document.getElementById(`task`).value;

    var todos = get_todos();
    todos.push(task);
    localStorage.setItem(`todo`, JSON.stringify(todos));
    document.getElementById(`task`).value = "";
    show();

    return false;
}

// Remove a task from the list
function remove(index) {
    var todos = get_todos();
    todos.splice(index, 1);
    localStorage.setItem("todo", JSON.stringify(todos));
    show();
}

// Keep tasks permanently on screen
function show() {
    var todos = get_todos();

    var html = "<ul>";

    // Displays task as list, creates "x" button
    for (let i = 0; i < todos.length; i++) {
        html += "<li>" + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    }

    html += "</ul>";
    document.getElementById("todos").innerHTML = html;

    // Attach click event listeners to each "x" button
    var removeButtons = document.getElementsByClassName("remove");
    for (let i = 0; i < removeButtons.length; i++) {
        removeButtons[i].addEventListener("click", function () {
            remove(i);
        });
    }
}


//Displays inputed task when "add item" button is clicked
document.getElementById(`add`).addEventListener(`click`, add);
show();