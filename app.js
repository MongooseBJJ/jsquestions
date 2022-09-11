const question = document.querySelector(".question-text");
const plusBtn = document.querySelector(".plus-icon");
const minusBtn = document.querySelector(".minus-icon");


plusBtn.addEventListener('click', function() {
    question.classList.add('show-text');
});

minustBtn.addEventListener('click', function() {
    question.classList.remove('show-text');
});