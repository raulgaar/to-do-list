function addTask() {
    const taskInput = document.getElementById("new-task");
    const taskList = document.getElementById("task-list");
    const taskText = taskInput.value;

    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => li.remove();

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = '';
}
taskInput.addEventListener("keyup", (e) => {
    if (e.key == "Enter") { addTask(); }
});