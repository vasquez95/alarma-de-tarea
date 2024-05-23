document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const datetimeInput = document.getElementById('datetimeInput');
    const taskText = taskInput.value.trim();
    const taskDateTime = datetimeInput.value;

    if (taskText !== "" && taskDateTime !== "") {
        addTask(taskText, taskDateTime);
        taskInput.value = "";
        datetimeInput.value = "";
    }
});

function addTask(taskText, taskDateTime) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = `${taskText} (Para: ${new Date(taskDateTime).toLocaleString()})`;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);

    document.getElementById('taskList').appendChild(li);
}

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    
    document.getElementById('digitalClock').textContent = formattedTime;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to display the time immediately
