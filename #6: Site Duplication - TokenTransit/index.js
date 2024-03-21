//Nav Background Functionality:
window.addEventListener('scroll', setNavbarBackground);
window.addEventListener('resize', setNavbarBackground);
setNavbarBackground();

function setNavbarBackground() {
  const mobileWindowSize = window.innerWidth <= 767
  const hasUserScrolledDown = document.body.scrollTop > 10 || document.documentElement.scrollTop > 10;
  let navbar = document.getElementById("navbar");
  if (!navbar) return;
  if (!mobileWindowSize) {
    navbar.style.background = hasUserScrolledDown ? "#222" : "transparent";
  } else if (mobileWindowSize) {
    navbar.style.background = "#222"
  }
}

//Nav Button Functionality:
const mobileNav = document.querySelector('.mobile-nav-button')
mobileNav.addEventListener('click', displayMobileNavbarLinks);
mobileNav.addEventListener('click', changeMobileButtonBackgroundColor);

function displayMobileNavbarLinks() {
    const links = document.querySelectorAll('.mobile-list-item');
    links.forEach(li => li.classList.toggle('js-show-mobile-nav-links'));
}
function changeMobileButtonBackgroundColor() {
      mobileNav.classList.toggle('active-button');    
}


