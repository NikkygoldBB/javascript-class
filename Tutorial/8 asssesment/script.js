//This script handles the logic using modern JavaScript syntax.

//JavaScript
let tasks = [];

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

// --- Adding Tasks ---
// Arrow function to handle the click event
const addTask = () => {
    const title = taskInput.value.trim();
    
    // Nullish coalescing (??) to default title
    const newTask = {
        id: Date.now(),
        title: (title !== "" ? title : null) ?? "Untitled Task",
        completed: false,
        details: {
            // priority is intentionally left out to test optional chaining
        }
    };

    // Spread operator to add new task to the array
    tasks = [...tasks, newTask];
    
    taskInput.value = "";
    renderTasks();
};

addTaskBtn.addEventListener('click', addTask);

// --- Rendering Tasks ---
function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task) => {
        // Object destructuring
        const { id, title, completed, details } = task;

        const li = document.createElement('li');
        li.className =`task-item $ {completed ? 'completed' : ''}`;
        
        // Optional Chaining (?.) and Nullish Coalescing (??)
        const priorityText = details?.priority ?? "No priority set";

        li.innerHTML = `
            <strong>${title}</strong> (Priority: ${priorityText})
            <button data-id="${id}" data-action="complete">Complete</button>
            <button data-id="${id}" data-action="delete">Delete</button>
        `;
        taskList.appendChild(li);
    });

    logTasks(...tasks);
}

// --- Event Delegation ---
// Single listener on the <ul> element
taskList.addEventListener('click', (event) => {
    const target = event.target;
    const id = Number(target.dataset.id);
    const action = target.dataset.action;

    if (!action) return;

    if (action === 'complete') {
        tasks = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
    } else if (action === 'delete') {
        tasks = tasks.filter(t => t.id !== id);
    }

    renderTasks();
});

// --- Rest Operator ---
function logTasks(...allTasks) {
    console.log("Current Task Titles:", allTasks.map(({ title }) => title));
}