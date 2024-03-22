//Nav Background Functionality:
window.addEventListener('scroll', setNavbarBackground)
window.addEventListener('resize', setNavbarBackground)
setNavbarBackground()

function setNavbarBackground() {
  const mobileWindowSize = window.innerWidth <= 767
  const hasUserScrolledDown = document.body.scrollTop > 10 || document.documentElement.scrollTop > 10;
  const navbar = document.getElementById("navbar")
  if (!navbar) return
  if (!mobileWindowSize) {
    navbar.style.background = hasUserScrolledDown ? "#222" : "transparent"
  } else {
    navbar.style.background = "#222"
  }
}

//Nav Button Functionality:
const mobileNav = document.querySelector('.mobile-nav-button')
addMobileNavClickHandling()

function addMobileNavClickHandling() {
  if (!mobileNav) return
  mobileNav.addEventListener('click', handleMobileNavClick);
}
function handleMobileNavClick() {
  changeMobileButtonBackgroundColor()
  displayMobileNavbarLinks()
}
function changeMobileButtonBackgroundColor() {
  if (!mobileNav) return
  mobileNav.classList.toggle('button-is-focused')
}
function displayMobileNavbarLinks() {
  const links = document.querySelectorAll('.mobile-list-item')
  links.forEach(li => li.classList.toggle('js-show-mobile-nav-links'))
}



