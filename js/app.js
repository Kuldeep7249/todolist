// Function to add a new task
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskText = taskInput.value.trim();

  if (taskText !== "") {
    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    li.textContent = taskText;
    taskList.appendChild(li);

    // Clear input field after adding task
    taskInput.value = "";

    // Add delete functionality
    var deleteBtn = document.createElement("span");
    deleteBtn.className = "delete";
    deleteBtn.textContent = "❌";
    deleteBtn.onclick = function () {
      taskList.removeChild(li);
    };
    li.appendChild(deleteBtn);
  } else {
    alert("Please enter a task!");
  }
}
