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

const folders = JSON.parse(localStorage.getItem("folders")) || [];
let activeFolder = null;
let editingTask = null; // Track which task is being edited

// Ensure the folders are displayed when the page loads
folders.forEach((folder) => {
  createTab(folder);
});

document.getElementById("addFolderButton").addEventListener("click", () => {
  const folderName = document.getElementById("folderName").value;

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
document
  .getElementById("viewAllTasksButton")
  .addEventListener("click", displayAllTasks);

function displayAllTasks() {
  document.getElementById("taskList").innerHTML = "";
  document.getElementById("taskArea").style.display = "none";
  document.getElementById("currentFolderName").textContent = "All Tasks"; // Update this

  // Gather all tasks from all folders
  folders.forEach((folder) => {
    folder.tasks.forEach((task) => {
      displayTask(task);
    });
  });

  // Update active tab appearance
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

  // Add event listener for adding tasks
  addTaskButton.addEventListener("click", (event) => {
    event.stopPropagation(); // prevent switching tab when tab is clicked
    activeFolder = folder; // Set the active folder for adding tasks
    showTaskInput(); 
  });

  // Create Delete button for folders
  const deleteFolderButton = document.createElement("button");
  deleteFolderButton.textContent = "Delete Folder";
  deleteFolderButton.style.marginLeft = "10px";

  // event listener for deleting the folder
  deleteFolderButton.addEventListener("click", (event) => {
    event.stopPropagation(); 
    deleteFolder(folder); // Call the delete folder function
  });

  tab.appendChild(addTaskButton); // Add the Add Task button to the tab
  tab.appendChild(deleteFolderButton); // Add the Delete Folder button to the tab
  tab.addEventListener("click", () => {
    switchTab(folder);
  });

  document.getElementById("tabsContainer").appendChild(tab);
}

function switchTab(folder) {
  activeFolder = folder;
  document.getElementById("currentFolderName").textContent = folder.name;
  document.getElementById("taskArea").style.display = "none"; // Hide task input area when switching tabs
  document.getElementById("taskList").innerHTML = ""; // Clear existing tasks

  folder.tasks.forEach((task) => {
    displayTask(task);
  });

  // Set the active class for the clicked tab
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
  event.currentTarget.classList.add("active"); // Set the active tab
}

function showTaskInput() {
  if (!activeFolder) return; 

  const taskArea = document.getElementById("taskArea");
  taskArea.style.display = "block"; // Show the task area

  // Reset input fields
  document.getElementById("taskTitle").value = "";
  document.getElementById("taskDescription").value = "";
  document.getElementById("taskDueDate").value = "";
  document.getElementById("taskPriority").value = "Low"; // Reset to default value
  document.getElementById("currentTaskInfo").style.display = "none"; // Hide current task info
}

// Add task button click event listener
document.getElementById("addTaskButton").addEventListener("click", () => {
  if (!activeFolder) {
    alert("Please select a folder to add tasks to.");
    return;
  }

  if (editingTask) {
    const title = document.getElementById("taskTitle").value;
    const description = document.getElementById("taskDescription").value;
    const dueDate = document.getElementById("taskDueDate").value; // Get due date
    const priority = document.getElementById("taskPriority").value; // Get priority

    if (title && description && dueDate && priority) {
      editingTask.title = title;
      editingTask.description = description;
      editingTask.dueDate = dueDate;
      editingTask.priority = priority;

      document.getElementById("addTaskButton").textContent = "Add Task";
      editingTask = null; // Clear the editing task

      document.getElementById("taskArea").style.display = "none";
      refreshTaskList(); // 
      document.getElementById("currentTaskInfo").style.display = "none"; // Hide current task info
      saveFolders(); // Save to localStorage
    } else {
      alert("Please fill in all fields.");
    }
  } else {
    // If adding a new task
    const title = document.getElementById("taskTitle").value;
    const description = document.getElementById("taskDescription").value;
    const dueDate = document.getElementById("taskDueDate").value;                   
    const priority = document.getElementById("taskPriority").value; 

    if (title && description && dueDate && priority) {
      const newTask = new Task(title, description, dueDate, priority);
      activeFolder.addTask(newTask);
      displayTask(newTask);

      // Hide the task area once a task is added
      document.getElementById("taskArea").style.display = "none"; 
      document.getElementById("taskTitle").value = "";
      document.getElementById("taskDescription").value = "";
      document.getElementById("taskDueDate").value = "";
      document.getElementById("taskPriority").value = "Low"; 
      saveFolders(); // Save to localStorage
    } else {
      alert("Please fill in all fields.");
    }
  }
});

function displayTask(task) {
  const taskList = document.getElementById("taskList");
  const listItem = document.createElement("li");

  listItem.textContent = `${task.title} - ${task.description} (Due: ${task.dueDate}, Priority: ${task.priority})`;

  // Edit button
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.style.marginLeft = "10px";
  editButton.addEventListener("click", (event) => {
    event.stopPropagation(); 
    editTask(task); 
  });

  // Create Delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.style.marginLeft = "10px";

  deleteButton.addEventListener("click", (event) => {
    event.stopPropagation(); 
    deleteTask(task); // Invoke delete task functionality
    listItem.remove();                   
    saveFolders(); // Save to localStorage after deletion
  });

  // Append buttons to list item
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  taskList.appendChild(listItem);
}

function editTask(task) {
  // Pre-fill input fields with the task's current values
  document.getElementById("taskTitle").value = task.title;
  document.getElementById("taskDescription").value = task.description;
  document.getElementById("taskDueDate").value = task.dueDate;
  document.getElementById("taskPriority").value = task.priority;

  showTaskInput();

  editingTask = task;
  
  updateCurrentTaskInfo(task);

  document.getElementById("addTaskButton").textContent = "Update Task";
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
    activeFolder.tasks.splice(index, 1); // Remove the task from the folder
  }
}

function deleteFolder(folder) {
  const index = folders.indexOf(folder);
  if (index > -1) {
    folders.splice(index, 1); // Remove the folder from the folders array
    document.getElementById("tabsContainer").innerHTML = ""; // Clear tabs
    folders.forEach((f) => createTab(f)); // Recreate tabs for remaining folders
    activeFolder = null; // Clear the active folder
    document.getElementById("taskList").innerHTML = ""; // Clear task list
    document.getElementById("currentFolderName").textContent = ""; // Clear displayed folder name
    saveFolders(); // Save to localStorage after deletion
  }
}

function refreshTaskList() {
  document.getElementById("taskList").innerHTML = ""; // Clear existing task list
  // Repopulate the task list
  activeFolder.tasks.forEach((task) => {
    displayTask(task);
  });
}

function saveFolders() {
  localStorage.setItem("folders", JSON.stringify(folders)); // Save folders to localStorage
}
