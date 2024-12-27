export function editTask(task, showTaskInput, updateCurrentTaskInfo) {
    // Pre-fill input fields with the task's current values
    document.getElementById("taskTitle").value = task.title;
    document.getElementById("taskDescription").value = task.description;
    document.getElementById("taskDueDate").value = task.dueDate;
    document.getElementById("taskPriority").value = task.priority;
  
    showTaskInput(); // Show the task input area
  
    editingTask = task; // Set the task being edited
  
    updateCurrentTaskInfo(task); // Update current task display
  
    document.getElementById("addTaskButton").textContent = "Update Task"; // Change button text
  }