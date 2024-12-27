import { deleteTask } from './deleteTask.js';
import { editTask } from './editTask.js';
import { viewAllTasks } from './viewAllTasks.js';

document
  .getElementById("viewAllTasksButton")
  .addEventListener("click", () => viewAllTasks(folders));

// Example of updating the editTask functionality
function onEditButtonClicked(task) {
    event.stopPropagation(); 
    editTask(task, showTaskInput, updateCurrentTaskInfo);
}

// Usage of deleteTask in the displayTask function
function displayTask(task) {
  const taskList = document.getElementById("taskList");
  const listItem = document.createElement("li");

  listItem.textContent = `${task.title} - ${task.description} (Due: ${task.dueDate}, Priority: ${task.priority})`;

  // Edit button
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.style.marginLeft = "10px";
  editButton.addEventListener("click", (event) => onEditButtonClicked(task));

  // Create Delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.style.marginLeft = "10px";

  deleteButton.addEventListener("click", (event) => {
    event.stopPropagation(); 
    deleteTask(activeFolder, task); // Invoke delete task functionality
    listItem.remove();                   
    saveFolders(); // Save to localStorage after deletion
  });

  // Append buttons to list item
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  taskList.appendChild(listItem);
}