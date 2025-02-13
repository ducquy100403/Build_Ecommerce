// Script for navigation bar

const bar = document.getElementById('bar');
const nav = document.getElementById('header__navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', (event) => {
        event.preventDefault(); // Ngăn load lại trang nếu là <a> hoặc button với type mặc định
        nav.classList.remove('active');
    });
}
