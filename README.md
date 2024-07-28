***HTML***


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>To-Do List</h1>
        <form id="task-form">
            <input type="text" id="task-input" placeholder="Add a new task..." required>
            <input type="date" id="task-date">
            <select id="task-priority">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <select id="task-category">
                <option value="work">Work</option>
                <option value="personal">Personal</option>
                <option value="shopping">Shopping</option>
            </select>
            <button type="submit">Add Task</button>
        </form>
        <ul id="task-list"></ul>
    </div>
    <script src="script.js"></script>
</body>
</html>

///////////////////////////////////////////////////////////////////////////////////////

***CSS***

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 400px;
}

h1 {
    text-align: center;
    color: #333;
}

form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

input[type="text"], input[type="date"], select, button {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

button {
    background: #28a745;
    color: #fff;
    border: none;
    cursor: pointer;
}

button:hover {
    background: #218838;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    background: #f9f9f9;
    padding: 10px;
    margin: 10px 0;
    border-left: 5px solid #28a745;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

li.complete {
    text-decoration: line-through;
    border-left-color: #6c757d;
}

.task-details {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.task-buttons {
    display: flex;
    gap: 5px;
}

.task-buttons button {
    background: #dc3545;
    border: none;
    color: #fff;
    padding: 5px;
    cursor: pointer;
}

.task-buttons button.complete-btn {
    background: #007bff;
}

.task-buttons button:hover {
    opacity: 0.8;
}

///////////////////////////////////////////////////////////////////////////////////////

***JAVA SCRIPT***

document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskDate = document.getElementById('task-date');
    const taskPriority = document.getElementById('task-priority');
    const taskCategory = document.getElementById('task-category');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', addTask);

    function addTask(event) {
        event.preventDefault();
        
        const taskText = taskInput.value;
        const dueDate = taskDate.value;
        const priority = taskPriority.value;
        const category = taskCategory.value;

        const li = document.createElement('li');
        li.className = priority;

        const taskDetails = document.createElement('div');
        taskDetails.className = 'task-details';

        const taskInfo = document.createElement('span');
        taskInfo.textContent = `${taskText} (${category}) - ${dueDate}`;

        const taskButtons = document.createElement('div');
        taskButtons.className = 'task-buttons';

        const completeBtn = document.createElement('button');
        completeBtn.className = 'complete-btn';
        completeBtn.textContent = 'Complete';
        completeBtn.addEventListener('click', markComplete);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteTask);

        taskButtons.appendChild(completeBtn);
        taskButtons.appendChild(deleteBtn);
        taskDetails.appendChild(taskInfo);
        li.appendChild(taskDetails);
        li.appendChild(taskButtons);

        taskList.appendChild(li);

        taskInput.value = '';
        taskDate.value = '';
    }

    function markComplete(event) {
        const li = event.target.parentElement.parentElement;
        li.classList.toggle('complete');
    }

    function deleteTask(event) {
        const li = event.target.parentElement.parentElement;
        taskList.removeChild(li);
    }
});
