let tasks = ["Buy milk","Clean the room","Go to gym"];

const displayTasks = () => {
    let taskDisplay = document.querySelector('#taskDisplay');
    taskDisplay.innerHTML = '';
    tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.classList.add('bg-blue-200', 'p-2', 'm-2', 'rounded-lg','decoration-none','list-none');
    taskItem.textContent = task;
    taskDisplay.appendChild(taskItem);
    })
}

const addTask = () => {
    const newTaskInput = document.querySelector('#newTask')
    const newTask = newTaskInput.value;
     
    if(newTask !== ""){
        tasks.push(newTask);
        
        displayTasks();
    }else{
        alert('please  enter a task')
    }
}
 displayTasks();

const addTaskButton = document.querySelector('#addTaskButton');
addTaskButton.addEventListener('click',addTask);


