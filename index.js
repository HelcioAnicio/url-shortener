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

function copyToClipboard(text) {
  navigator.clipboard.writeText('text')
  alert('Copied!')
}

 


function shorteningLinkDesktop() {
  if (linkInputDesktop.value == '') {
    alert('Type or paste a link')
  }

  fetch(api + linkInputDesktop.value)
    .then(res => res.json())
    .then(data => {

     const link = data?.result.short_link3
        wrapperLinks.innerHTML+=`
        <div class="link-container">
        <a class='link-item' href=${linkInputDesktop.value}> ${linkInputDesktop.value} </a>
          <div class="DivResult">
            <a class='link-item' href=${link}> ${link} </a>
            <button onclick="copyToClipboard()" class="CopyLinks">Copy</button>
          </div>
        </div>
        `

          async function copyToClipboard() {

        await navigator.clipboard.writeText(link)
        alert('Copied!')
      }
    })
}

function shorteningLinkMobile() {
    if (linkInputMobile.value == '') {
    alert('Type or paste a link')
}
 fetch(api + linkInputMobile.value)
 .then(res => res.json())
  .then(data => {
      links.push(data?.result.short_link3)

      links.map((link) => {
       anchorLink.innerHTML = link
       anchorLink.href = link
       anchorLink.classList = 'link-item'
        
       wrapperLinks.appendChild(anchorLink)
    })})
}


// listaprodutos.innerHTML+=`
//   <h3>`+val.nome+
// `

// <form action="">
//   <input type="text" id="name" name="name">
//   <input type="submit" value="Enviar">
// </form>

// var input = document.querySelector("#name");
// var texto = input.value;
// console.log(texto);
