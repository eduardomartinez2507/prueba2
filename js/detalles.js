const API_URL = "https://docs.thedogapi.com";

const HTMLResponse = document.querySelector("#popup");

const tpl;

fetch('${API_URL}/user')
    .then((response) => response.json())
    .then(users) => {
        const tpl = user.map(user =>'<li>raza ${bre}');
    });