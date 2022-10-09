const menuMobile = document.querySelector('.header__nav')
const menuBtn = document.querySelector('.btn--menu')

menuBtn.addEventListener('click', (e) => {
	menuMobile.classList.toggle('show')
})
