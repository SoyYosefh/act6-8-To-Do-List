function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var li = document.createElement("li");
        li.textContent = taskText;

        var completeBtn = document.createElement("button");
        completeBtn.textContent = "Completada";
        completeBtn.className = "complete";
        completeBtn.onclick = function() {
            li.classList.toggle("completed");
        };

        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Eliminar";
        deleteBtn.className = "delete";
        deleteBtn.onclick = function() {
            li.remove();
        };

        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);

        document.getElementById("taskList").appendChild(li);
        taskInput.value = "";
    } else {
        alert("Por favor, ingresa una tarea.");
    }
}
