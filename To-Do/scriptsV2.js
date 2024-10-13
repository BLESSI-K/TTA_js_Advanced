let tasks = ["Buy milk","Clean the room","Go to the gym,visit my family"];


const displayTasks = () => {
    let taskDisplay = document.querySelector('#taskDisplay');
    taskDisplay.innerHTML = '';
    tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.classList.add('bg-blue-200', 'p-2', 'm-2', 'rounded-lg','flex','justify-between','list-none');
    //create the task  title  container
    const taskText = document.createElement('span');

    taskText.textContent = task;
     taskItem.appendChild(taskText);

     const taskLinks = document.createElement('div');
     taskLinks.classList.add('task-links');
    //create update and delete button
     const updateButton = document.createElement('a');
     updateButton.href = '#';
     updateButton.textContent = 'update';
     updateButton.classList.add('text-blue-500','mr-4' );
     updateButton.addEventListener('click', () => editTask(index));
     taskLinks.appendChild(updateButton);


     const deleteButton = document.createElement('a');
     deleteButton.href = '#';
     deleteButton.textContent = 'delete';
     deleteButton.classList.add('text-red-500');
     deleteButton.addEventListener('click', () => deleteTask(index));
    taskLinks.appendChild(deleteButton);
    
 
    taskItem.appendChild(taskLinks);

    // taskItem.textContent = task;
    taskDisplay.appendChild(taskItem);
    })
}

const saveTaskToLocalStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

const addTask = () => {
    const newTaskInput = document.querySelector('#newTask');
    const newTask = newTaskInput.value;

    if (newTask.trim() !== ""){
       tasks.push(newTask);
       newTaskInput.value = "";
       saveTaskToLocalStorage();
       displayTasks();
    }
    else{
        alert('Please  enter a task');
    }
}

    const editTask = (index) => {
     const updateTask = prompt ("update your Task", tasks[index]);

     if(updateTask && updateTask.trim() !== ""){
        tasks[index] = updateTask.trim();
        saveTaskToLocalStorage();
        displayTasks();
     }else{
        alert('please enter a valid task');
     }
  }
 


const deleteTask = (index) => {
  if(confirm('Are you sure you want to delete this task? ')){
tasks.splice(index, 1);
saveTaskToLocalStorage();
displayTasks();  
} 
}

const addTaskButton = document.querySelector('#addTaskButton');
addTaskButton.addEventListener("click", addTask);



const loadTasksFromStorage = () =>{
const taskStored = localStorage.getItem('tasks');
if (taskStored) {
    tasks = JSON.parse(taskStored);
    displayTasks();
}
}
loadTasksFromStorage();
 