const burgerButton = document.querySelector('#burgerButton');
const dropdownMenuContainer = document.querySelector('#dropdownMenuContainer');
const dropdownMenuGoogle = document.querySelector('#dropdownMenu__google');
const dropdownMenuMobile = document.querySelector('#dropdownMenu');
const searchInput = document.querySelector('.search-input')
const searchContainer = document.querySelector('.main__search-container')
const arrowBackButton = document.querySelector('#arrowBackButton');
const clearSearchButton = document.querySelector('#clearSearchButton');

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
  searchContainer.classList.add('active')
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
