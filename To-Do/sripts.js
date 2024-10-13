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
    //this code use too seve to lockstorage\\
const saveTaskToLAcalStorage = () => {

    localStorage.setItem('tasks', JSON.stringify(tasks));

}

const addTask = () => {
    const newTaskInpunt = document.querySelector('#newtask')
    const newTask =newTaskInpunt.value;
    if(newTask.trim() !== ""){
        tasks.push(newTask);
        newTaskInpunt.value = '';
        saveTaskToLAcalStorage();
        displayTasks();
    }else{
        alert('✨please enter the fucing 🐱‍👤 task✨');
    }
}
displayTasks();
const addtaskbutton = document.querySelector('#addtaskbutton');

const loadTasksFromLacalStorage = () => {
    const storedTasks = localStorage.getItem('tasks');
    if(storedTasks){
        tasks = JSON.parse(storedTasks);
        displayTasks();
    }
}
loadTasksFromLacalStorage();
addtaskbutton.addEventListener('click', addTask);

