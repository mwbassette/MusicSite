window.addEventListener('scroll', setNavbarBackground);
window.addEventListener('resize', setNavbarBackground);

function setNavbarBackground() {
  const hasUserScrolledDown = document.body.scrollTop > 10 || document.documentElement.scrollTop > 10;
  let navbar = document.getElementById("navbar");

  if (window.screen.width <= 767) {
    navbar.style.background = "#222";
  } else {
    navbar.style.background = hasUserScrolledDown ? "#222" : "transparent";
  }
}

const mobileNav = document.querySelector('.mobile-nav-button')
mobileNav.addEventListener('click', displayMobileNavbarLinks);

function displayMobileNavbarLinks() {
    const links = document.querySelectorAll('.mobile-list-item');
    links.forEach(li => li.classList.toggle('js-show-mobile-nav-links'));
}
  




