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
                <button class="btnCheck"><i class="fa-solid fa-check"></i></button>
                <button class="btnDelete"><i class="fa-solid fa-trash"></i></button>
            </div>
        </li>        
        `
        ul.appendChild(newTopic);   
        input.value = '';
        createBtnEventListener();
    }
})

function createBtnEventListener(){
    const btnCheck = document.querySelectorAll('.btnCheck');
    const btnDelete = document.querySelectorAll('.btnDelete');

    btnCheck.forEach((element) => {
        element.addEventListener('click', function(){
            element.parentElement.previousElementSibling.classList.add('done');
        })
    })

    btnDelete.forEach((element) => {
        element.addEventListener('click', function(){
            element.parentElement.parentElement.remove();
        })
    })
}