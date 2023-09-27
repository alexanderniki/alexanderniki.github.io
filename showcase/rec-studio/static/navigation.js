function toggleMainNav() {
    console.log("TOGGLE NAVIGATION");
    let button = document.getElementById("button-navigation-toggle");
    let container = document.getElementById("toolbar-container");
    let opened = false;

    console.log("Buton: " + button);
    console.log("Container: " + container);
    console.log("Is opened: " + opened);

    console.log(container.style.display);

    if (container.style.display === "flex") {
        container.style.display = "none";
        opened = false;
    }
    else {
        container.style.display = "flex";
        opened = true;
    }

}