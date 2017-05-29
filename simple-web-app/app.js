

// using DOM

let box = document.querySelector('.jumbotron');
let showBtn = document.querySelector('.btn-primary');
let hideBtn = document.querySelector('.btn-danger');

showBtn.addEventListener('click', function (e) {
    box.style.display = '';
});

hideBtn.addEventListener('click', function (e) {
    box.style.display = 'none';
});