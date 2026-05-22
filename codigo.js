
function calcularCotizacion() {
 
    var precioTotal = parseFloat(document.getElementById('autoSeleccionado').value);
    var entrega = parseFloat(document.getElementById('entregaInicial').value) || 0;
    var meses = parseInt(document.getElementById('cuotasElegidas').value);
    var divResultado = document.getElementById('resultado');

 
    if (entrega >= precioTotal) {
        divResultado.style.display = "block";
        divResultado.style.backgroundColor = "#f8d7da";
        divResultado.style.color = "#721c24";
        divResultado.innerHTML = "Error: La entrega inicial no puede superar el precio del auto.";
        return;
    }

  
    var saldoFinanciar = precioTotal - entrega;
    var valorCuota = saldoFinanciar / meses;

   
    divResultado.style.display = "block";
    divResultado.style.backgroundColor = "#d4edda";
    divResultado.style.color = "#155724";
    divResultado.innerHTML = "Saldo Neto a Financiar: U$S " + saldoFinanciar + "<br>Usted abonará " + meses + " cuotas fijas de: U$S " + valorCuota.toFixed(2);
}


function validarLogin() {
    var user = document.getElementById('usuario').value;
    var pass = document.getElementById('clave').value;

    if(user == "" || pass == "") {
        alert("Por favor, complete todos los campos.");
    } else {
        alert("Bienvenido " + user + ". Sesión iniciada.");
    }
}

function limpiarCampos() {
    document.getElementById('usuario').value = "";
    document.getElementById('clave').value = "";
}


function irARegistro() {
    document.getElementById('pantallaLogin').style.display = "none";
    document.getElementById('pantallaRegistro').style.display = "block";
}

function irALogin() {
    document.getElementById('pantallaLogin').style.display = "block";
    document.getElementById('pantallaRegistro').style.display = "none";
}

function registrarUsuario() {
    var nombre = document.getElementById('regNombre').value;
    if(nombre == "") {
        alert("Por favor ingrese su nombre.");
    } else {
        alert("Cuenta creada con éxito para " + nombre);
        irALogin();
    }
}