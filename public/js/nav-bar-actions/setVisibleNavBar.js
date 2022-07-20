/* Botão de abertura do menu */
const buttonOpenMenu = document.getElementById('icon-open-nav-bar');

/* Elementos do menu aberto */
const menuNavBar = document.getElementById('menu-nav-bar');
const buttonCloseMenu = document.getElementById('icon-close-nav-bar');

/* Funções das ações */
const closeMenu = () => {
    menuNavBar.classList.add('invisible');
    buttonOpenMenu.classList.remove('invisible');
    buttonCloseMenu.removeEventListener('click', closeMenu); 
};

const openMenu = () => {
    buttonOpenMenu.classList.add('invisible');
    menuNavBar.classList.remove('invisible');
    buttonCloseMenu.addEventListener('click', closeMenu);
};

const setVisibleNavBar = {
    setNavBar() {
        buttonOpenMenu.addEventListener('click', openMenu);
    }
};

export default setVisibleNavBar;