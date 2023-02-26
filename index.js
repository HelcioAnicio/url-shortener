const mobileMenu = document.getElementById('mobile-menu')
const openMenuButton = document.getElementById('open-menu-button')
const closeMenuButton = document.getElementById('close-menu-button')
const html = document.querySelector('html')

openMenuButton.addEventListener('click', () => {
  if (!mobileMenu.classList.contains('isOpen')) {
    mobileMenu.classList.add('isOpen')
    html.style.overflowY = 'hidden'
  }
})

closeMenuButton.addEventListener('click', () => {
  if (mobileMenu.classList.contains('isOpen')) {
    mobileMenu.classList.remove('isOpen')
    html.style.overflowY = 'visible'
  }
})