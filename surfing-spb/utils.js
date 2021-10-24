/*
 * utils.js
 * Various useful functions and classed
 */



/* Toggle CSS style using sessionStorage to store current theme */
function toggleTheme() {
    // Obtains an array of all <link>
    // elements.
    // Select your element using indexing.
    var theme = document.getElementsByTagName('link')[0];

    // Change the value of href attribute 
    // to change the css sheet.
    if (theme.getAttribute('href') == 'theme-light.css') {
        theme.setAttribute('href', 'theme-dark.css');
        sessionStorage.setItem('theme', "theme-dark.css");
    } else {
        theme.setAttribute('href', 'theme-light.css');
        sessionStorage.setItem('theme', "theme-light.css");
    }
}

function setTheme(value) {
  
    // Obtain the name of stylesheet 
    // as a parameter and set it 
    // using href attribute.
    // https://www.geeksforgeeks.org/how-to-switch-between-multiple-css-stylesheets-using-javascript/

    var sheets = document
        .getElementsByTagName('link');

    sheets[0].href = value;
}

function getCurrentTheme() {

    // Initialize current theme
    // @TODO: rename the function

    var theme = sessionStorage.getItem('theme');
    if (theme != null) {
        setTheme(theme);
    }
    else {
        theme = 'theme-light.css';
        sessionStorage.setItem('theme', theme);
        setTheme(theme);
    }
    
}