const ham = document.getElementById('ham');


ham.addEventListener('click', () => {
    ham.classList.toggle('active');
    document.querySelector('.nav-bar').classList.toggle('active');
})