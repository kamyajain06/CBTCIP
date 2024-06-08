document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');
    const completedTaskList = document.getElementById('completedTaskList');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const timestamp = new Date().toLocaleString();
        const taskItem = createTaskItem(taskText, timestamp);
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }

    function createTaskItem(taskText, timestamp) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <div>
                <span class="timestamp">${timestamp}</span>
                <button class="complete-btn">Complete</button>
            </div>
        `;

        const completeButton = li.querySelector('.complete-btn');
        completeButton.addEventListener('click', () => completeTask(li));

        return li;
    }

    function completeTask(taskItem) {
        taskItem.classList.add('completed');
        const timestamp = new Date().toLocaleString();
        taskItem.querySelector('.timestamp').innerText = `Completed on: ${timestamp}`;
        taskItem.querySelector('.complete-btn').remove();
        completedTaskList.appendChild(taskItem);
    }
});
