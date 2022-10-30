const closeBtn = document.querySelector('.close-btn');
const toggleBtn = document.querySelector('.toggle-btn');
const menu = document.querySelector('.menu');


const showMenu = () => {
    menu.classList.add('show-menu');
    document.querySelector('.overlay').style.display = 'block';

}
const closeMenu = () => {
    menu.classList.remove('show-menu');
    document.querySelector('.overlay').style.display = 'none';

}

toggleBtn.addEventListener('click', showMenu);
closeBtn.addEventListener('click',closeMenu);