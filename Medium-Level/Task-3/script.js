const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Load tasks when page opens
window.onload = function () {
    loadTasks();
};

// Add Task
addBtn.addEventListener("click", function () {

    const task = taskInput.value.trim();

    if(task === ""){
        alert("Please enter a task.");
        return;
    }

    addTask(task);

    saveTask(task);

    taskInput.value = "";
});

// Create Task
function addTask(task){

    const li = document.createElement("li");

    li.innerHTML = `
        ${task}
        <button class="delete">Delete</button>
    `;

    taskList.appendChild(li);

    li.querySelector(".delete").addEventListener("click", function(){

        li.remove();

        deleteTask(task);

    });

}

// Save to Local Storage
function saveTask(task){

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

}

// Load Tasks
function loadTasks(){

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function(task){

        addTask(task);

    });

}

// Delete Task
function deleteTask(task){

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks = tasks.filter(function(item){

        return item !== task;

    });

    localStorage.setItem("tasks", JSON.stringify(tasks));

}