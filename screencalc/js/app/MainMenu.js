class MainMenu {
    
    /*
    * Dropdown menu
    */

    constructor() {
        
        // Menu area
        this.menuArea = document.getElementById("main_menu_area");
        
        // Menu buttons
        this.btnShow = document.getElementById("btn_showmenu");
        this.btnClose = document.getElementById("btn_closemenu");
        //this.btnCalculator = document.getElementById("btn_calculator");
        this.btnSettings = document.getElementById("btn_settings");
        this.btnAbout = document.getElementById("btn_about");
        
        this.btnDisplay = document.getElementById("nav_display");
        this.btnResource = document.getElementById("nav_resource");
        this.btnConvertor = document.getElementById("nav_convertor");
        
        
        // Sections
        this.section_displayprop = document.getElementById("section_displayprop");
        this.section_rescalc = document.getElementById("section_rescalc");
        this.section_convertor = document.getElementById("section_convertor");
        
        
        // Menu actions
        this.btnClose.onclick = this.closeMenu;
        this.btnShow.onclick = this.showMenu;
        
        //this.btnCalculator.onclick = this.closeMenu;
        this.btnSettings.onclick = this.closeMenu;
        this.btnAbout.onclick = this.closeMenu;
        
        this.btnDisplay.onclick = this.showDpiCalc;
        this.btnResource.onclick = this.showResourceCalc;
        this.btnConvertor.onclick = this.showConvertor;
        
        this.applyDefaultState();
        
    }
    
    
    closeMenu() {  // Don't try to call this method from other methods: it is fucking doesn't work!
        console.log("MainMenu.closeMenu()");
        
        let menuArea = document.getElementById("main_menu_area");
        menuArea.style.display = "none";
    }
    
    
    showMenu() {
        console.log("MainMenu.showMenu()");
        
        let menuArea = document.getElementById("main_menu_area");
        menuArea.style.display = "flex";
    }
    
    
    showDpiCalc() {
        console.log("AppMenu.showDpiCalc()");
        
        // Show content
        section_displayprop.style.display = "block";
        section_rescalc.style.display = "none";
        section_convertor.style.display = "none";
        
        // Highlight link
        nav_display.style.color = "#FFF9C4";
        nav_display.style.textDecoration = "underline";
        nav_resource.style.color = "#cfd8dc";
        nav_resource.style.textDecoration = "none";
        nav_convertor.style.color = "#cfd8dc";
        nav_convertor.style.textDecoration = "none";
        
        
        
        console.log("ShowDpiCalc: close menu");
        let menuArea = document.getElementById("main_menu_area");
        menuArea.style.display = "none";
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
        nav_resource.style.textDecoration = "underline";
        nav_convertor.style.color = "#cfd8dc";
        nav_convertor.style.textDecoration = "none";
        
        console.log("ShowResourceCalc: close menu");
        let menuArea = document.getElementById("main_menu_area");
        menuArea.style.display = "none";
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
        nav_convertor.style.textDecoration = "underline";
        
        console.log("ShowConvertor: close menu");
        let menuArea = document.getElementById("main_menu_area");
        menuArea.style.display = "none";
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