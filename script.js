function openBacklogModal() {
    document.getElementById('backlogModal').style.display = 'block';
}

function closeBacklogModal() {
    document.getElementById('backlogModal').style.display = 'none';
}

function addTask() {
    // Obtener los valores del formulario
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const assigned = document.getElementById('assigned').value;
    const priority = document.getElementById('priority').value;
    const status = document.getElementById('status').value;
    const deadline = document.getElementById('deadline').value;

    // Crear un nuevo elemento para la tarea
    const taskElement = document.createElement('div');
    taskElement.className = 'task';
    taskElement.innerHTML = `
        <p><strong>Título:</strong> ${title}</p>
        <p><strong>Descripción:</strong> ${description}</p>
        <p><strong>Asignado a:</strong> ${assigned}</p>
        <p><strong>Prioridad:</strong> ${priority}</p>
        <p><strong>Fecha límite:</strong> ${deadline}</p>
    `;

    // Buscar la columna correspondiente y agregar la tarea
    const column = document.querySelector(`.column[data-status="${status}"] .task-container`);
    column.appendChild(taskElement);

    // Cerrar el modal y limpiar el formulario
    closeBacklogModal();
    document.getElementById('taskForm').reset();
}
