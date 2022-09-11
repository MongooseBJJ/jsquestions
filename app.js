const btns = document.querySelectorAll('.question-btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const question = e.currentTarget.parentElement.parentElement
        question.classList.toggle('show-text');
    });
});

// plusBtn.addEventListener('click', function() {
//     question.classList.add('show-text');
// });

// minustBtn.addEventListener('click', function() {
//     question.classList.remove('show-text');
// });