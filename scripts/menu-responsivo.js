function menu() {
  var x = document.getElementById("topnavResponsivo");
  if (x.className === "topnav") {
    x.className += " responsivo";
  } else {
    x.className = "topnav";
  }
}