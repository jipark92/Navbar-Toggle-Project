const toggle = document.querySelector('.toggle-btn');
const links = document.querySelector('.navbar-links');

toggle.addEventListener('click',()=>{
    links.classList.toggle('active');
})
