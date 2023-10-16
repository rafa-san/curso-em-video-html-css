let iconeMenu = document.querySelector('#icone-menu');
iconeMenu.addEventListener('click', menu);

function menu() {
  let menuResponsivo = document.getElementById("topnavResponsivo");
  if (menuResponsivo.className === "topnav") {
    menuResponsivo.className += " responsivo";
  } else {
    menuResponsivo.className = "topnav";
  }
}





