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



 // const isUserAtPageTop = document.body.scrollTop < 11 || document.documentElement.scrollTop < 11;
  // navbar.style.background = isUserAtPageTop ? "transparent" : "#222";

  // if (window.scrollY === 0) {
  // navbar.style.background = "transparent";
  // }
  




