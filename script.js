document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addButton = document.getElementById("add");
    const taskList = document.getElementById("task-list");

    addButton.addEventListener("click", function () {
        const taskText = taskInput.value;
        if (taskText) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete">Delete</button>
            `;

            taskList.appendChild(listItem);
            taskInput.value = "";

            const deleteButton = listItem.querySelector(".delete");
            deleteButton.addEventListener("click", function () {
                listItem.remove();
            });
        }
    });

    taskInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            addButton.click();
        }
    });
});