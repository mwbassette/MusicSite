window.addEventListener('scroll', setNavbarBackground);

function setNavbarBackground() {
  const hasUserScrolledDown = document.body.scrollTop > 10 || document.documentElement.scrollTop > 10;
  let navbar = document.getElementById("navbar");
  navbar.style.background = hasUserScrolledDown ? "#222" : "transparent";
}





