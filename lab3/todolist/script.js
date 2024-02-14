const form = document.querySelector('form');
const taskList = document.querySelector('#task-list');

function addTask(task){
    const listItem = document.createElement('li');
    listItem.innerHTML = `<input type="checkbox" /> <span>${task}</span> <img src="https://cdn2.iconfinder.com/data/icons/e-business-helper/240/627249-delete3-1024.png" alt="Delete" class="delete-icon"/>`;
    taskList.appendChild(listItem);
}

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const input = document.querySelector('#task-input');
    const task = input.value;
    addTask(task);
    input.value = '';
})

taskList.addEventListener('click', (event)=>{
    if(event.target.classList.contains('delete-icon')){
        const listItem = event.target.parentElement;
        taskList.removeChild(listItem);
    } else if (event.target.type === 'checkbox') {
        const listItem = event.target.parentElement;
        listItem.classList.toggle('completed');
    }
});
