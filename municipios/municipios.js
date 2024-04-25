function favoritar(newFav) {
    let favList = []
    
    if (!localStorage.getItem('favoritos')) {
        favList.push(newFav)
        localStorage.setItem('favoritos', JSON.stringify(favList))
        console.log(newFav)
    } else {
        favList = localStorage.getItem('favoritos'); 
        favList = JSON.parse(favList)
        favList.push(newFav)
        localStorage.setItem('favoritos', JSON.stringify(favList))
        console.log(JSON.stringify(localStorage.getItem('favoritos')))
    }

}

function listMunicipios(element) {
    const municipiosContainer = document.querySelector('.municipios-list')
    municipiosContainer.innerHTML += `<li class="municipio"> ${element.nome}</ li> <button class="fav-button" onclick="favoritar('${element.nome}')">Favoritar</button>`
}

async function fetchMunicipio() {
    const title = document.querySelector('#title');
    const estado = location.search.replace('?municipio=', '')
    title.innerHTML = `Municípios de ${estado}`
    const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`)
    const responseBody = await response.json();

    responseBody.forEach(element => {
        listMunicipios(element)
    })
}