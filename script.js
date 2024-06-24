const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const wapper = document.querySelector('.wapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    bar.addEventListener('click', () => {
        nav.classList.remove('active');
    })
} 

registerLink.onclick = () => {
    wapper.classList.add('active');
}

loginLink.onclick = () => {
    wapper.classList.remove('active');
}