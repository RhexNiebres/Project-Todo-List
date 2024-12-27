import "./styles.css";

class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

class Folder {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }
}

// Load folders from localStorage and ensure they are instances of Folder
const storedFolders = JSON.parse(localStorage.getItem("folders")) || [];
const folders = storedFolders.map((folderData) => {
  const folder = new Folder(folderData.name);
  folder.tasks = folderData.tasks || []; // Ensure tasks are populated if they exist
  return folder;
});

let activeFolder = null;
let editingTask = null; // Track which task is being edited

// Ensure the folders are displayed when the page loads
folders.forEach((folder) => {
  createTab(folder);
});

// Add Folder
document.getElementById("addFolderButton").addEventListener("click", () => {
  const folderName = document.getElementById("folderName").value.trim(); // Trim whitespace

  if (folderName) {
    const newFolder = new Folder(folderName);
    folders.push(newFolder);
    createTab(newFolder);
    saveFolders(); // Save to localStorage
    document.getElementById("folderName").value = ""; // Clear input
  } else {
    alert("Please enter a folder name.");
  }
});

// View all tasks
document
  .getElementById("viewAllTasksButton")
  .addEventListener("click", displayAllTasks);

function displayAllTasks() {
  document.getElementById("taskList").innerHTML = "";
  document.getElementById("taskArea").style.display = "none"; // Hide task area
  document.getElementById("currentFolderName").textContent = "All Tasks";

  // Gather all tasks in all folders
  folders.forEach((folder) => {
    folder.tasks.forEach((task) => {
      displayTask(task);
    });
  });

  // Remove active class from all tabs
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
}

function createTab(folder) {
  const tab = document.createElement("div");
  tab.className = "tab";
  tab.textContent = folder.name;

  const addTaskButton = document.createElement("button");
  addTaskButton.textContent = "Add Task";
  addTaskButton.style.marginLeft = "10px";
  addTaskButton.classList.add("addTaskButton");

  addTaskButton.addEventListener("click", (event) => {
    event.stopPropagation();
    activeFolder = folder; // Set active folder
    showTaskInput();
  });

  const deleteFolderButton = document.createElement("button");
  deleteFolderButton.textContent = "Delete Folder";
  deleteFolderButton.style.marginLeft = "10px";
  deleteFolderButton.classList.add("deleteFolderButton");
  deleteFolderButton.addEventListener("click", (event) => {
    event.stopPropagation();
    deleteFolder(folder);
  });

  // Set the click event for the tab
  tab.addEventListener("click", (event) => {
    switchTab(folder);
  });

  tab.appendChild(addTaskButton);
  tab.appendChild(deleteFolderButton);
  document.getElementById("tabsContainer").appendChild(tab);
}

function switchTab(folder) {
  activeFolder = folder;
  document.getElementById("currentFolderName").textContent = folder.name;
  document.getElementById("taskArea").style.display = "block"; // Show task area
  document.getElementById("taskList").innerHTML = ""; // Clear task list

  // Display tasks for the selected folder
  folder.tasks.forEach((task) => {
    displayTask(task);
  });

  // Remove the active class from all tabs
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  // Activate the current tab
  const activeTab = Array.from(tabs).find((t) => t.textContent === folder.name);
  if (activeTab) {
    activeTab.classList.add("active"); // Add active class
  }
}

function showTaskInput() {
  if (!activeFolder) return;

  const taskArea = document.getElementById("taskArea");
  taskArea.style.display = "block"; // Show task area

  // Clear input fields
  document.getElementById("taskTitle").value = "";
  document.getElementById("taskDescription").value = "";
  document.getElementById("taskDueDate").value = "";
  document.getElementById("taskPriority").value = "Low";
  document.getElementById("currentTaskInfo").style.display = "none"; // Hide task info
}

// Add Task
document.getElementById("addTaskButton").addEventListener("click", () => {
  if (!activeFolder) {
    alert("Please select a folder to add tasks to.");
    return; // Exit if there's no active folder
  }

  const title = document.getElementById("taskTitle").value.trim();
  const description = document.getElementById("taskDescription").value.trim();
  const dueDate = document.getElementById("taskDueDate").value;
  const priority = document.getElementById("taskPriority").value;

  // Validate inputs
  if (!title || !description || !dueDate || !priority) {
    alert("Please fill in all fields.");
    return;
  }

  if (editingTask) {
    // If editing an existing task
    editingTask.title = title;
    editingTask.description = description;
    editingTask.dueDate = dueDate;
    editingTask.priority = priority;

    document.getElementById("addTaskButton").textContent = "Add Task"; // Reset button text
    editingTask = null;

    document.getElementById("taskArea").style.display = "none"; // Hide task input
    refreshTaskList();
    document.getElementById("currentTaskInfo").style.display = "none";
    saveFolders();
  } else {
    // Create a new task
    const newTask = new Task(title, description, dueDate, priority);
    console.log("Adding Task to Folder:", activeFolder.name); // Debugging line
    activeFolder.addTask(newTask); // This should now work without error
    displayTask(newTask);

    document.getElementById("taskTitle").value = "";
    document.getElementById("taskDescription").value = "";
    document.getElementById("taskDueDate").value = "";
    document.getElementById("taskPriority").value = "Low"; //defualt priority

    document.getElementById("taskArea").style.display = "none"; // Hide task input
    saveFolders();
  }
});

function displayTask(task) {
  const taskList = document.getElementById("taskList");
  const listItem = document.createElement("li");

  listItem.textContent = `${task.title} - ${task.description} (Due: ${task.dueDate}, Priority: ${task.priority})`;

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.style.marginLeft = "10px";
  editButton.classList.add("editButton");

  editButton.addEventListener("click", (event) => {
    event.stopPropagation();
    editTask(task);
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.style.marginLeft = "10px";
  deleteButton.classList.add("deleteButton");

  deleteButton.addEventListener("click", (event) => {
    event.stopPropagation();
    deleteTask(task);
    listItem.remove(); // Remove from UI immediately
    saveFolders(); // Save after deletion
  });

  listItem.appendChild(editButton); // Add the edit button
  listItem.appendChild(deleteButton); // Add the delete button

  taskList.appendChild(listItem); // Append to task list
}

function editTask(task) {
  // Populate the form for editing
  document.getElementById("taskTitle").value = task.title;
  document.getElementById("taskDescription").value = task.description;
  document.getElementById("taskDueDate").value = task.dueDate;
  document.getElementById("taskPriority").value = task.priority;

  showTaskInput(); // Show the task input area
  editingTask = task; // Set the current task to editing
  updateCurrentTaskInfo(task);
  document.getElementById("addTaskButton").textContent = "Update Task"; // Change button text
}

function updateCurrentTaskInfo(task) {
  const currentTaskInfo = document.getElementById("currentTaskInfo");
  currentTaskInfo.style.display = "block";
  currentTaskInfo.innerHTML = `
      <h3>Current Task Details:</h3>
      <p><strong>Title:</strong> ${task.title}</p>
      <p><strong>Description:</strong> ${task.description}</p>
      <p><strong>Due Date:</strong> ${task.dueDate}</p>
      <p><strong>Priority:</strong> ${task.priority}</p>
  `;
}

function deleteTask(task) {
  const index = activeFolder.tasks.indexOf(task);
  if (index > -1) {
    activeFolder.tasks.splice(index, 1); // Remove task from active folder's tasks
  }
}

function deleteFolder(folder) {
  const index = folders.indexOf(folder);
  if (index > -1) {
    folders.splice(index, 1); // Remove folder from folders array
    document.getElementById("tabsContainer").innerHTML = ""; // Clear current tabs
    folders.forEach((f) => createTab(f)); // Recreate tabs
    activeFolder = null; // Clear active folder
    document.getElementById("taskList").innerHTML = ""; // Clear task list
    document.getElementById("currentFolderName").textContent = ""; // Clear current folder name
    saveFolders(); // Save state
  }
}

function refreshTaskList() {
  document.getElementById("taskList").innerHTML = ""; // Clear current task list
  activeFolder.tasks.forEach((task) => {
    displayTask(task); // Display all tasks in the current folder
  });
}

function saveFolders() {
  const foldersToSave = folders.map((folder) => ({
    name: folder.name,
    tasks: folder.tasks, // You may want to save tasks more thoroughly depending on your task structure
  }));
  localStorage.setItem("folders", JSON.stringify(foldersToSave)); // Save to localStorage
}
