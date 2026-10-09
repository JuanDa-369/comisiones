
const VENTAS_BASE = 5;

function calcularComision(numeroVentas, precioProducto) {
    let comision = 0;

    if (numeroVentas > VENTAS_BASE) {
        let ventasExtra = numeroVentas - VENTAS_BASE;
        comision = ventasExtra * (precioProducto * 0.10);
    }

    return comision;
}

function validarCampo(idInput, idError) {
    const input = document.getElementById(idInput);
    const mensaje = document.getElementById(idError);
    const valor = input.value.trim();

    input.classList.remove("input-error");
    mensaje.textContent = "";

    if (valor === "") {
        mensaje.textContent = "No puede estar vacío.";
        input.classList.add("input-error");
        return false;
    }

    if (!/^[0-9]+$/.test(valor)) {
        mensaje.textContent = "Solo se permiten números.";
        input.classList.add("input-error");
        return false;
    }

    if (valor.length > 5) {
        mensaje.textContent = "Máximo 5 dígitos.";
        input.classList.add("input-error");
        return false;
    }

    return true;
}

function validarFormulario() {
    const sueldoValido = validarCampo(
        "txtSueldoBase",
        "errorSueldoBase"
    );

    const ventasValidas = validarCampo(
        "txtVentas",
        "errorVentas"
    );

    const precioValido = validarCampo(
        "txtPrecio",
        "errorPrecio"
    );

    return sueldoValido && ventasValidas && precioValido;
}

function calcular() {
    if (!validarFormulario()) {
        return;
    }

    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recueperarEntero("txtVentas");
    let precioProducto = recuperarFloat("txtPrecio");

    let comision = calcularComision(numeroVentas, precioProducto);
    let total = sueldoBase + comision;

    mostrarEnSpan("spSueldoBase", sueldoBase.toFixed(2));
    mostrarEnSpan("spComision", comision.toFixed(2));
    mostrarEnSpan("spTotal", total.toFixed(2));
}