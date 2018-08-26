class CalculatorApp {
    
    constructor() {
        
        let main_menu = new Navigation();
        
    }
    
    
    calculateDisplayProperties() {
        
        let width_input = document.getElementById("x");
        let height_input = document.getElementById("y");
        let diagonal_input = document.getElementById("diag");
        
        let width = width_input.value;
        let height = height_input.value;
        let diagonal = diagonal_input.value;
        
        let display = new Display();
        display.initialize(width, height, diagonal);
        
        document.getElementById("dpi_result").innerHTML = display.dpi;
        document.getElementById("density_result").innerHTML = display.density;
        document.getElementById("aspectratio_result").innerHTML = display.aspect_ratio;
        document.getElementById("screenarea_result").innerHTML = display.area;
        document.getElementById("displayType_result").innerHTML = display.type;
        
    }
    
    
    calculateDensities() {
        
        let density_calc = new AndroidResourceCalculator();
        let dp_input = document.getElementById("dp_input");
        let density_type_list = document.getElementById("list_density_types");
        
        let dp = dp_input.value;
        let density_type = density_type_list.value;
        
        density_calc.matchDensities(dp, density_type);
        
        
        document.getElementById("ldpi").innerHTML = density_calc.densities["ldpi"];
        document.getElementById("mdpi").innerHTML = density_calc.densities["mdpi"];
        document.getElementById("hdpi").innerHTML = density_calc.densities["hdpi"];
        document.getElementById("xhdpi").innerHTML = density_calc.densities["xhdpi"];
        document.getElementById("xxhdpi").innerHTML = density_calc.densities["xxhdpi"];
        document.getElementById("xxxhdpi").innerHTML = density_calc.densities["xxxhdpi"];
    }
    
    
    calculatePhysicalSizes() {
        
        let uconv = new UnitConvertor();
        let px_input = document.getElementById("px_input");
        let dpi_input = document.getElementById("dpi_input");
        let size_result = document.getElementById("size_result");
        
        let px = px_input.value;
        let dpi = dpi_input.value;
        
        let result_in = uconv.px2in(px, dpi);
        let result_mm = uconv.in2mm(result_in);
        size_result.innerHTML = result_mm;
        
    }
    
    
    calculateRealSizePx() {
        let ascale_calc = new AndroidScaleCalculator();
        let dp_input = document.getElementById("size_calc_dp").value;
        let size_input = document.getElementById("screen_dpi").value;
        let result_px = document.getElementById("real_size");
        
        ascale_calc.initialize(size_input, dp_input);
        let size_result = ascale_calc.calculateRealSize();
        result_px.innerHTML = size_result;
    }
    
    calculateCardMaxWidth() {
        
        console.log("calculateCardMaxWidth()");
        
        let sectionDisplaypropWidth = document.getElementById("section_displayprop").clientWidth;
        let sectionConvertorWidth = document.getElementById("section_convertor").clientWidth;
        let sectionRescalcWidth = document.getElementById("section_rescalc").clientWidth;
        console.log("DISPLAYPROP WIDTH: " + sectionDisplaypropWidth);
        console.log("DISPLAYPROP WIDTH: " + sectionConvertorWidth);
        console.log("DISPLAYPROP WIDTH: " + sectionRescalcWidth);
        
        let maxWidth = 0;
        if (maxWidth < sectionDisplaypropWidth) {
            maxWidth = sectionDisplaypropWidth;
        }
        if (maxWidth < sectionRescalcWidth) {
            maxWidth = sectionRescalcWidth;
        }
        if (maxWidth < sectionConvertorWidth) {
            maxWidth = sectionConvertorWidth;
        }
        
        console.log("MAXWIDTH: " + maxWidth)

    }
    
}


function main() {
    my_calc = new CalculatorApp();
    my_calc.calculateCardMaxWidth();
    
    /**
    * Возможно, этот код можно вынести в конструктор MyCalculatorApp
    **/
    
    let width_input = document.getElementById("x");
    let height_input = document.getElementById("y");
    let diagonal_input = document.getElementById("diag");
    
    width_input.value = screen.width;
    height_input.value = screen.height;
    
    width_input.onchange = my_calc.calculateDisplayProperties;
    width_input.onkeyup = my_calc.calculateDisplayProperties;
    
    height_input.onchange = my_calc.calculateDisplayProperties;
    height_input.onkeyup = my_calc.calculateDisplayProperties;
    
    diagonal_input.onchange = my_calc.calculateDisplayProperties;
    diagonal_input.onkeyup = my_calc.calculateDisplayProperties;
    
    
    let calculate_button = document.getElementById("calculate_button");
    calculate_button.onclick = my_calc.calculateDensities;
    
    // Setup default value = 1 to densities convertor 
    let dp_input = document.getElementById("dp_input");
    dp_input.value = 1; // default value
    my_calc.calculateDensities();
    
    let calculate_size_button = document.getElementById("btn_calculate_size");
    calculate_size_button.onclick = my_calc.calculatePhysicalSizes;
    
    let calculate_realsize_button = document.getElementById("calculate_realsize_button");
    calculate_realsize_button.onclick = my_calc.calculateRealSizePx;

}