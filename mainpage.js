async function listApi(element) {
    const estadosContainter = document.querySelector('.estados-list');
    estadosContainter.innerHTML += `<a href="./municipios/index.html?municipio=${element.sigla}"> <li class="estado"> ${element.nome}</ li> </a>`
}

async function fetchApi() {
    const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    const responseBody = await response.json();

    responseBody.forEach(element => {
        listApi(element)
        console.log(element)
    })
}