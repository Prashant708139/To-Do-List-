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