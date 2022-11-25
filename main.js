const burgerButton = document.querySelector('#burgerButton');
const dropdownMenuContainer = document.querySelector('#dropdownMenuContainer');
const dropdownMenuGoogle = document.querySelector('#dropdownMenu__google')
const dropdownMenuMobile = document.querySelector('#dropdownMenu');

burgerButton.addEventListener('click', () => {
  dropdownMenuMobile.classList.add('active');
  dropdownMenuContainer.classList.add('active');
})

dropdownMenuGoogle.addEventListener('click', () => {
  dropdownMenuMobile.classList.remove('active');
  dropdownMenuContainer.classList.remove('active');
})

dropdownMenuContainer.addEventListener('click', () => {
  dropdownMenuMobile.classList.remove('active');
  dropdownMenuContainer.classList.remove('active');
})