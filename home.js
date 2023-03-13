// menu icon funtionality
const menuIcon = document.querySelector('.nav__bar__icon--menu');
const modalMenu = document.querySelector('.modal_navbar');

menuIcon.addEventListener('click',()=>{
    modalMenu.style.display = 'block'
})

// close menu modal
const closeMenu = document.querySelector('.modal_navbar_close--menu')

closeMenu.addEventListener('click',()=>{
    modalMenu.style.display = 'none'
})


