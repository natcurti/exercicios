const input = document.getElementById('tasks');
const ul = document.getElementById('listOfTasks');

input.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        e.preventDefault();
        const newTopic = document.createElement('li');
        newTopic.innerHTML =  `
        <li class="tasks__list">
            <p>${input.value}</p>
            <div>
                <i class="fa-solid fa-check"></i>
                <i class="fa-solid fa-trash"></i>
            </div>
        </li>        
        `
        ul.appendChild(newTopic);   
        input.value = '';        
    }
})

ul.addEventListener('click', function(e){
    if(e.target.classList.contains('fa-check')){
        e.target.parentElement.previousElementSibling.classList.toggle('done');
    } 
    if(e.target.classList.contains('fa-trash')){
        e.target.parentElement.parentElement.remove();
    }
})