let burger = document.querySelector('#burger')
let menu = document.querySelector('#menu')
// burger_active

burger.addEventListener('click', function() {
    this.classList.toggle("burger_active")
    menu.classList.toggle('nav__list_active') 
})