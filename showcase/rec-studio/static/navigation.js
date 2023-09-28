function toggleMainNav() {
    console.log("TOGGLE NAVIGATION");
    let button = document.getElementById("button-navigation-toggle");
    let container = document.getElementById("toolbar-container");
    let opened = false;

    if (container.className === "toolbar__container") {
        container.className += " displayed";
        opened = true;
    }
    else {
        container.className = "toolbar__container";
        opened = false;
    }

}

function closeNavbar() {
    let container = document.getElementById("toolbar-container");
    container.className = "toolbar__container";
}

/**
 * Navigation icons
 */
function toggleNavigationIcon(x) {
    let elem = document.getElementById("menu-icon");
    //x.classList.toggle("change");
    elem.classList.toggle("change");
  }