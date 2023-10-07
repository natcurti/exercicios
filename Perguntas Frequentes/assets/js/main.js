const containerQuestions = document.querySelectorAll('.container__questions');
const answer = document.querySelectorAll('.answer');
const title = document.querySelectorAll('.title');

for (let i = 0; i < containerQuestions.length; i++){
    containerQuestions[i].addEventListener('click', () => {
        answer[i].classList.toggle('open');
        title[i].classList.toggle('open');
    })
}