

$(document).ready(function() {

    var nroTotalImagenes = 9;
    var nroColumnasPorFila = 3;
    var selectorTablaHTML = "#lista-gatos"
    var url = "https://api.thecatapi.com/v1/images/search?limit="+nroTotalImagenes

    generar_galeria_imagenes(selectorTablaHTML, nroTotalImagenes, nroColumnasPorFila, url,"Cambiar Imagen");
});

function getBtnActionURL() {
    return "https://api.thecatapi.com/v1/images/search?limit=1";
}




fetch('https://cdn2.thecatapi.com/images/iWyIaja-G.jpg')
.then(response => response.json())
.then(json => {
    printGatos(json.results);
});


function printGatos(gatos) {
const container = document.getElementById('container')
gatos.forEach(gatos => {
container.innerHTML = `
${container.innerHTML}
<div class="card">
<img src="https://api.thecatapi.com/v1/images/search?limit="/>
<span>${getGatosId(gatos.url)}</span>
label${gatos.name.charAt(0).toUpperCase() + gatos.name.slice(1)}label
</card>
`;
});
}

function getGatosId(url) {
return url.replace('https://api.thecatapi.com/v1/images/search?limit=', '').replace('/','')
}
