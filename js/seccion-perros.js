h

$(document).ready(function() {

    var nroTotalImagenes = 10;
    var nroColumnasPorFila = 5;
    var selectorTablaHTML = "#lista-perros"
    var url = "https://api.thedogapi.com/v1/images/search?limit="+nroTotalImagenes
    

    generar_galeria_imagenes(selectorTablaHTML, nroTotalImagenes, nroColumnasPorFila, url,"Cambiar Imagen");
});

function getBtnActionURL() {
    return "https://api.thedogapi.com/v1/images/search?limit=1";
}


fetch('https://cdn2.thedogapi.com/images/wM40j-90o.jpg')
.then(response => response.json())
.then(json => {
    printPerros(json.results);
});


function printPerros(perros) {
const container = document.getElementById('container')
perros.forEach(perros => {
container.innerHTML = `
${container.innerHTML}
<div class="card">
<img src="https://api.thedogapi.com/v1/images/search?limit="/>
<span>${getPerrosId(gatos.url)}</span>
label${perros.name.charAt(0).toUpperCase() + perros.name.slice(1)}label
</card>
`;
});
}

function getPerrosId(url) {
return url.replace('https://api.thedogapi.com/v1/images/search?limit=', '').replace('/','')
}
