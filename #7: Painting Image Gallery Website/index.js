const boxArtLink = document.querySelector('#div-box-art-link');
boxArtLink.addEventListener('click', showBoxArt);

function showBoxArt() {
    const boxArtContainer = document.querySelector('.div-box-art-container');
    boxArtContainer.classList.toggle('js-expand');
    boxArtContainer.classList.toggle('js-hide');
}