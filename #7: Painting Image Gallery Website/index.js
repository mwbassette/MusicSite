//navbar functionality
const navLinkContainer = document.querySelector(".nav-link-list-container")
const navLinkList = document.querySelector(".nav-list")
const navLinks = document.querySelectorAll(".list-item > a")
const mobileNavButton = document.querySelector(".mobile-only-nav-button")

document.addEventListener('click', handleClickForMobileNavBar)

function handleClickForMobileNavBar() {
    mobileNavButton.addEventListener('click', showNavLinks)
}
function showNavLinks() {
    mobileNavButton.classList.toggle("mobile-position")
    navLinkContainer.classList.toggle("hide-on-mobile")
    navLinkList.classList.toggle("expand-for-mobile")
    navLinks.forEach(link => {
        link.classList.toggle('expand-for-mobile')
    })
}

//boxart functionality
const boxArtLink = document.querySelector('#div-box-art-link')
boxArtLink.addEventListener('click', showBoxArt)

function showBoxArt() {
    const boxArtContainer = document.querySelector('.div-box-art-container')
    boxArtContainer.classList.toggle('js-expand')
    boxArtContainer.classList.toggle('js-hide')
}



