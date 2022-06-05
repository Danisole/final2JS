let title = document.getElementById('title');
const nav = document.querySelector('.nav');
const logo = document.querySelector('.logo');


window.addEventListener('scroll', e =>{
    let value = window.scrollY; 
    title.style.marginTop = value * .7 + 'px';
    nav.classList.toggle('active', window.scrollY > 0);
    logo.classList.toggle('active', window.scrollY > 0);
});







