const burgerButton = document.querySelector('#burgerButton');
const dropdownMenuContainer = document.querySelector('#dropdownMenuContainer');
const dropdownMenuGoogle = document.querySelector('#dropdownMenu__google');
const dropdownMenuMobile = document.querySelector('#dropdownMenu');
const searchInput = document.querySelector('.search-input')
const searchContainer = document.querySelector('.main__search-container')
const arrowBackButton = document.querySelector('#arrowBackButton');
const clearSearchButton = document.querySelector('#clearSearchButton');
const dropdownMenuSwitch = document.querySelector('#dropdownMenuSwitch');
const footerSwitch = document.querySelector('#footerSwitch')

dropdownMenuMobile.addEventListener('click', (e) => e.stopPropagation())

burgerButton.addEventListener('click', () => {
  dropdownMenuMobile.classList.add('active');
  dropdownMenuContainer.classList.add('active');
})

dropdownMenuGoogle.addEventListener('click', (e) => {
  dropdownMenuMobile.classList.remove('active');
  dropdownMenuContainer.classList.remove('active');
})

dropdownMenuContainer.addEventListener('click', (e) => {
  dropdownMenuMobile.classList.remove('active');
  dropdownMenuContainer.classList.remove('active');
})

searchInput.addEventListener('click', () => {
  if(screen.width < 1024) {
    searchContainer.classList.add('active');
  }
})

searchInput.addEventListener('keyup', (e) => {
  const googleMicrophone = e.target.nextElementSibling;

  if(searchInput.value === '') {
    googleMicrophone.classList.remove('active')
  } else {
    googleMicrophone.classList.add('active')
  }
})

arrowBackButton.addEventListener('click', () => {
  searchContainer.classList.remove('active')
})

clearSearchButton.addEventListener('click', (e) => {
  const googleMicrophone = e.target.previousElementSibling;
  googleMicrophone.classList.remove('active');
  
  searchInput.value = '';
})

dropdownMenuSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark')

  if(document.body.classList.contains('dark')) {
    dropdownMenuSwitch.innerHTML = '<span class="material-symbols-outlined">dark_mode</span> Dark theme: on'
    localStorage.setItem('dark-mode', 'true')
  } else {
    dropdownMenuSwitch.innerHTML = '<span class="material-symbols-outlined">light_mode</span> Dark theme: off'
    localStorage.setItem('dark-mode', 'false')
  }
})

footerSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark')

  if(document.body.classList.contains('dark')) {
    footerSwitch.innerText = 'Dark theme: on';
    localStorage.setItem('dark-mode', 'true')
  } else {
    footerSwitch.innerText = 'Dark theme: off';
    localStorage.setItem('dark-mode', 'false')
  }
})


if(localStorage.getItem('dark-mode') === 'true') {
  document.body.classList.add('dark');
  footerSwitch.innerText = 'Dark theme: on';
  dropdownMenuSwitch.innerHTML = '<span class="material-symbols-outlined">dark_mode</span> Dark theme: on'
} else {
  document.body.classList.remove('dark');
  footerSwitch.innerText = 'Dark theme: off';
  dropdownMenuSwitch.innerHTML = '<span class="material-symbols-outlined">light_mode</span> Dark theme: off'
}


