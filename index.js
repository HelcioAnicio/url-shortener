const mobileMenu = document.getElementById('mobile-menu')
const openMenuButton = document.getElementById('open-menu-button')
const closeMenuButton = document.getElementById('close-menu-button')

openMenuButton.addEventListener('click', () => {
  !mobileMenu.classList.contains('isOpen') &&
    mobileMenu.classList.add('isOpen')
})

closeMenuButton.addEventListener('click', () => {
  mobileMenu.classList.contains('isOpen') &&
    mobileMenu.classList.remove('isOpen')
})