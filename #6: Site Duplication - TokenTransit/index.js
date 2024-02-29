window.onscroll = function() {setNavbarBackground()};
 
function setNavbarBackground() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").style.background = "#222";
  } else {
    document.getElementById("navbar").style.background = "transparent";
  }
}