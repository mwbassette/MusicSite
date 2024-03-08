const boxArtLink = document.querySelector('#div-box-art-link');
boxArtLink.addEventListener('click', showBoxArt);

function showBoxArt() {
    const boxArtContainer = document.querySelector('.div-box-art-container');
    boxArtContainer.classList.toggle('js-expand');
    boxArtContainer.classList.toggle('js-hide');
}


// const mobileNavButton = document.querySelector(".mobile-only-nav-button");
// mobileNavButton.addEventListener('click', showNavLinks);

// function showNavLinks() {
    
//     const navLinks = document.querySelectorAll(".list-item > a");
    
//     document.querySelector(".nav-link-list-container").classList.toggle("hide-on-mobile");
//     mobileNavButton.classList.toggle("mobile-position");

    
//     navLinks.classList.toggle("expand-for-mobile");
// }
    
