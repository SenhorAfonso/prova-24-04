function listFavs() {
    const favoritosContainer = document.querySelector('.favoritos-list');

    const municipiosFavoritos = JSON.parse(localStorage.getItem('favoritos'));

    if (municipiosFavoritos) {
        municipiosFavoritos.forEach(element => {
            favoritosContainer.innerHTML += `<li class="favoritos-item"> ${element} </li>`
        })
    }
}

function favoritosFlushall() {
    localStorage.removeItem('favoritos')
    window.location.href = "./index.html"
}