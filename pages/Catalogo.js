import "../styles/nosotros.css"

const contenido = document.getElementById("app"); // Obtener el elemento donde se cargará el contenido
const homeLink = document.getElementById("home-link");
const catalogoLink = document.getElementById("catalogo-link");
const nosotrosLink = document.getElementById("nosotros-link");
const contactoLink = document.getElementById("contacto-link");

export default function(){ 
    homeLink.classList = "offLi"
    catalogoLink.classList = "onLi"
    nosotrosLink.classList = "offLi"
    contactoLink.classList = "offLi"
    contenido.innerHTML = "<h1>Catalogo<h1>"
}
