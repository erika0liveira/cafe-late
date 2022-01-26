const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-cabecalho')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-cabecalho--ativo')
})
