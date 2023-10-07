const btn = document.querySelector('.btn');
const modalContainer = document.querySelector('.modal__container');
const closeBtn = document.querySelector('.modal__close');

btn.addEventListener('click', () => {
    btn.style.display = 'none';
    modalContainer.style.display = 'flex';
})

closeBtn.addEventListener('click', () => {
    btn.style.display = 'block';
    modalContainer.style.display = 'none';
})

window.addEventListener('click', function(e){
    if(e.target === modalContainer){
        modalContainer.style.display = 'none';
        btn.style.display = 'block';
    }
})