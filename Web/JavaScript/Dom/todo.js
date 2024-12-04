

let tasks = [];

const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', addTask);

function addTask() {
    const task = taskInput.value.trim();
    if (task) {
        const taskObj = {
            task,
            id: Date.now(),
            edited: false
        };
        tasks.push(taskObj);
        renderTaskList();
        taskInput.value = '';
    }
}


function renderTaskList() {
    const taskListHTML = tasks.map((task, index) => {
        return `
            <div class="task" data-id="${(task.id)}">
                ${task.edited ? `<input type="text" value="${task.task}" class="edit-input">` : `<span>${task.task}</span>`}
                ${task.edited ? `<button class="edit-btn" onclick="saveEdit(${(task.id)})">Save</button>` : `<button class="edit-btn" onclick="editTask(${(task.id)})">Edit</button>`}
                <button class="delete-btn" onclick="deleteTask(${(task.id)})">Delete</button>
            </div>
        `;
    }).join('');
    taskList.innerHTML = taskListHTML;
}

function editTask(id) {
    const taskIndex = tasks.findIndex(task => (task.id) === id);
    tasks[taskIndex].edited = true;
    renderTaskList();
}

function saveEdit(id) {
    const taskIndex = tasks.findIndex(task => (task.id) === id);
    const editInput = document.querySelector(`.task[data-id="${id}"] .edit-input`);
    if (editInput) {
        tasks[taskIndex].task = editInput.value;
        tasks[taskIndex].edited = false;
        renderTaskList();
    }
}

function deleteTask(id) {
    tasks = tasks.filter(task => (task.id) !== id);
    renderTaskList();
}

