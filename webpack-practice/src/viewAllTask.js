export function viewAllTasks(folders) {
    document.getElementById("taskList").innerHTML = "";
    document.getElementById("taskArea").style.display = "none";
    document.getElementById("currentFolderName").textContent = "All Tasks"; 
  
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