// Task storage
let tasks = [];

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Add task (arrow function + spread + nullish coalescing)
addTaskBtn.addEventListener("click", () => {
  const title = taskInput.value ?? "";

  const newTask = {
    id: Date.now(),
    title: title.trim() ?? "Untitled Task",
    completed: false,
    details: {}
  };

  tasks = [...tasks, newTask];
  taskInput.value = "";
  renderTasks();
});

// Render tasks (array & object destructuring)
function renderTasks() {
  taskList.innerHTML = "";

  for (const task of tasks) {
    const { id, title, completed } = task;

    const li = document.createElement("li");
    li.dataset.id = id;
    li.className = completed ? "completed" : "";

    const priority = task.details?.priority ?? "No priority set";

    li.innerHTML = `
      <strong>${title}</strong> (Priority: $ {priorityText})
          <button data-id="${id}" data-action="complete">Complete</button>
            <button data-id="${id}" data-action="delete">Delete</button>
      `;
    taskList.appendChild(li);
  }
}

