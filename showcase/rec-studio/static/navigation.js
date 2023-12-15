function toggleMainNav() {
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
    //toggleNavigationIcon(0);
    resetNavigationIcon();
}

/**
 * Navigation icons
 */
function toggleNavigationIcon(x) {
    let elem = document.getElementById("menu-icon");
    elem.classList.toggle("change");
}

function resetNavigationIcon() {
    let elem = document.getElementById("menu-icon");
    elem.classList.remove("change");
}