const VENTAS_BASE = 5;


function calcularComision(numeroVentas, precioProducto) {

    let comision = 0;


    if (numeroVentas > VENTAS_BASE) {
        let ventasExtra = numeroVentas - VENTAS_BASE;
        comision = ventasExtra * (precioProducto * 0.10);
    }
    return comision;


} 

function calcular(){
// recuperamos propiedades de la caja de texto
//let componenteSueldoBase= document.getElementById("txtSueldoBase");
//let componeteVentas= document.getElementById("txtVentas");
//let componetePrecio= document.getElementById("txtPrecio");

// recuperamos el  valor de la caja de texto    
    //let sueldoBaseStr= componenteSueldoBase.value;

    //let sueldoBaseStr = recuperarTexto("txtSueldoBase");
    //let numeroVentasStr = recuperarTexto("txtVentas");
    //let precioProductoStr = recuperarTexto("txtPrecio");


//let numeroVentasStr= componeteVentas.value;
//let precioProductoStr= componetePrecio.value;

// convertimos el texto en número    
    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas");
    let precioProducto = recuperarFloat("txtPrecio");

    let comision = calcularComision(numeroVentas, precioProducto);

    let total = sueldoBase + comision;
    
    //let spSueldoBase = document.getElementById("spSueldoBase");
    //let spComision = document.getElementById("spComision");
    //let spTotal = document.getElementById("spTotal");

    //spSueldoBase.textContent = sueldoBase;
    //spComision.textContent = comision;
    //spTotal.textContent = total;

    mostrarEnSpan("spSueldoBase", sueldoBase);
    mostrarEnSpan("spComision", comision);
    mostrarEnSpan("spTotal",total );



}
