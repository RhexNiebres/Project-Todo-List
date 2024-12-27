export function deleteTask(activeFolder, task) {
    const index = activeFolder.tasks.indexOf(task);
    if (index > -1) {
      activeFolder.tasks.splice(index, 1); // Remove the task from the folder
    }
  }