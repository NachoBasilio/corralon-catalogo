import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Default from "./pages/Default";
import "./styles/index.css"

const homeLink = document.getElementById("home-link");
const catalogoLink = document.getElementById("catalogo-link");
const nosotrosLink = document.getElementById("nosotros-link");
const contactoLink = document.getElementById("contacto-link");



function cargarContenido(ruta) {
  switch (ruta) {
    case "home":
      Home();
      break;
    case "catalogo":
      Catalogo();
      break;
    case "nosotros":
      Nosotros();
      break;
    case "contacto":
      Contacto();
      break;
    default:
      Default();
  }
}

function manejarRuta() {
  let ruta = window.location.hash.slice(1); // Elimina el símbolo '#' de la URL
  cargarContenido(ruta);
}

// Agregar los eventos de clic a cada enlace del navbar
homeLink.addEventListener("click", () => (window.location.hash = "home"));
catalogoLink.addEventListener("click", () => (window.location.hash = "catalogo"));
nosotrosLink.addEventListener("click", () => (window.location.hash = "nosotros"));
contactoLink.addEventListener("click", () => (window.location.hash = "contacto"));

// Agregar un evento para detectar cambios en el hash de la URL
window.addEventListener("hashchange", manejarRuta);

// Establecer la ruta inicial en el historial del navegador y cargar la página correspondiente
if (!window.location.hash) {
  window.location.hash = "home";
} else {
  manejarRuta();
}


document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const header = document.querySelector('header');
  let lastScrollPosition = 0;

  menuToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    navMenu.classList.toggle('active');
  });

  document.addEventListener('click', (event) => {
    if (navMenu.classList.contains('active') && !navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
      navMenu.classList.remove('active');
    }
  });

  document.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > lastScrollPosition) {
      header.style.top = '-100%'; // Ocultar la barra de navegación cuando se desplaza hacia arriba
    } else {
      header.style.top = '0'; // Mostrar la barra de navegación cuando se desplaza hacia abajo
    }
    lastScrollPosition = currentScrollPosition;
  });
});
