"use strict";

class Navigation {
    
    /*
    * Dropdown menu
    */

    constructor() {
        
        /*console.log("creating main menu ...");
        console.log("this: " + this);
        console.log(this);*/
        
        
        this.navItems = [ // Not in use yet
            {"nav-display": "Display"},
            {"nav-resource": "Resource"},
            {"nav-convertor": "Convertor"},
            {"nav-settings": "Settings"},
            {"nav-about": "About"},
            {"nav-quit": "Quit"}
        ];
        
        this.screens = [ // Not in use yet
            
        ];
        
        // Menu area
        this.menuArea = document.getElementById("main-menu-area");
        
        // Menu buttons
        this.btnShow = document.getElementById("btn_showmenu");
        this.btnClose = document.getElementById("btn_closemenu");
        
        this.btnDisplay = document.getElementById("nav_display");
        this.btnResource = document.getElementById("nav_resource");
        this.btnConvertor = document.getElementById("nav_convertor");
        this.btnSettings = document.getElementById("btn_settings");
        this.btnAbout = document.getElementById("btn_about");
        
        
        // Sections
        this.section_displayprop = document.getElementById("section_displayprop");
        this.section_rescalc = document.getElementById("section_rescalc");
        this.section_convertor = document.getElementById("section_convertor");
        
        
        // Menu actions
        this.btnClose.addEventListener("click", this.close.bind(this));
        this.btnShow.addEventListener("click", this.show.bind(this));
        this.btnSettings.addEventListener("click", this.close.bind(this));
        this.btnAbout.addEventListener("click", this.close.bind(this));
        
        this.btnDisplay.addEventListener("click", this.showDpiCalc);
        this.btnDisplay.addEventListener("click", this.close.bind(this));
        this.btnResource.addEventListener("click", this.showResourceCalc);
        this.btnResource.addEventListener("click", this.close.bind(this));
        this.btnConvertor.addEventListener("click", this.showConvertor);
        this.btnConvertor.addEventListener("click", this.close.bind(this));
        
        this.applyDefaultState();
        return this;
        
    }
    
    
    close() {
        /*console.log("MainMenu.close()");
        console.log("this: " + this.toString());
        console.log(this);*/
        this.menuArea.style.display = "none";
    }
    
    
    show() {
        /*console.log("MainMenu.show()");
        console.log("this: " + this.toString());
        console.log(this);*/
        
        this.menuArea.style.display = "flex";
    }
    
    
    showScreen(section) {
        // generic method for showing and hiding screens
    }
    
    
    showDpiCalc() {
        console.log("AppMenu.showDpiCalc()");
        
        // Show content
        section_displayprop.style.display = "block";
        section_rescalc.style.display = "none";
        section_convertor.style.display = "none";
        
        // Highlight link
        nav_display.style.color = "#FFF9C4";
        //nav_display.style.textDecoration = "underline";
        nav_resource.style.color = "#cfd8dc";
        nav_resource.style.textDecoration = "none";
        nav_convertor.style.color = "#cfd8dc";
        nav_convertor.style.textDecoration = "none";

    }
    
    
    showResourceCalc() {
        console.log("AppMenu.showResourceCalc()")
        
        // Show content
        section_displayprop.style.display = "none";
        section_rescalc.style.display = "block";
        section_convertor.style.display = "none";
        
        // Highlight link
        nav_display.style.color = "#cfd8dc";
        nav_display.style.textDecoration = "none";
        nav_resource.style.color = "#FFF9C4";
        // nav_resource.style.textDecoration = "underline";
        nav_convertor.style.color = "#cfd8dc";
        nav_convertor.style.textDecoration = "none";
    }
    
    
    showConvertor() {
        console.log("AppMenu.showConvertor()")
        
        // Show content
        section_displayprop.style.display = "none";
        section_rescalc.style.display = "none";
        section_convertor.style.display = "block";
        
        // Highlight link
        nav_display.style.color = "#cfd8dc";
        nav_display.style.textDecoration = "none";
        nav_resource.style.color = "#cfd8dc";
        nav_resource.style.textDecoration = "none";
        nav_convertor.style.color = "#FFF9C4";
        //nav_convertor.style.textDecoration = "underline";
    }
    
    
    applyDefaultState() {
        console.log("AppMenu.applyDefaultState()");
        
        // Show default content
        section_displayprop.style.display = "block";
        section_rescalc.style.display = "none";
        section_convertor.style.display = "none";
        
        // Highlight default "tab"
        nav_display.style.color = "#FFF9C4" // YELLOW 100
    }
    
}