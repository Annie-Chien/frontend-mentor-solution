const toggleBtn = document.querySelector('.toggle-btn');
const menu = document.querySelector('.menu-list');

const toggleMenu = () => {
  menu.classList.toggle('show');
};

toggleBtn.addEventListener('click', toggleMenu);
