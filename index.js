const mobileMenu = document.getElementById('mobile-menu')
const openMenuButton = document.getElementById('open-menu-button')
const closeMenuButton = document.getElementById('close-menu-button')
const html = document.querySelector('html')
const wrapperLinks = document.getElementById('wrapper-links')
const btnShorten = document.getElementById('btn-shorten')
const linkInputDesktop = document.getElementById('link-input-desktop')
const linkInputMobile = document.getElementById('link-input-mobile')
const api = 'https://api.shrtco.de/v2/shorten?url='

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

async function copyToClipboard(text) {
  await navigator.clipboard.writeText(text)
  alert(`Copied: ${text}`)
}

function shorteningLinkDesktop() {
  if (linkInputDesktop.value == '') {
    alert('Type or paste a link')
  }

  fetch(api + linkInputDesktop.value)
    .then(res => res.json())
    .then(data => {

      const link = data?.result.short_link3

      const stringM = String(linkInputDesktop.value).length < String(linkInputDesktop.value).slice(0, 20)


      wrapperLinks.innerHTML += `
        <div class="link-container">
        <a class='link-item' href=${stringM}> ${String(linkInputDesktop.value)} </a>
          <div class="DivResult">
            <a class='link-item' href='${link}'> ${link} </a>
            <button onclick="copyToClipboard('${link}')" class="CopyLinks">Copy</button>
          </div>
        </div>
        `
    })
}

function shorteningLinkMobile() {
  if (linkInputMobile.value == '') {
    alert('Type or paste a link')
  }

  fetch(api + linkInputMobile.value)
    .then(res => res.json())
    .then(data => {
      const link = data?.result.short_link3

      const stringM = String(linkInputMobile.value).slice(0, 20)



      wrapperLinks.innerHTML += `
        <div class="link-container">
        <a class='link-item' href=${linkInputMobile.value}> ${stringM}</a>
          <div class="DivResult">
            <a class='link-item' href=${link}> ${link} </a>
            <button onclick="copyToClipboard(${link && String(link)})" class="CopyLinks">Copy</button>
          </div>
        </div>
        `
    })
}