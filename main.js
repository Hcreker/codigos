
function somar() {
    var valor1 = parseFloat(document.getElementById('valor1').value);
    var valor2 = parseFloat(document.getElementById('valor2').value);
    var resultado = valor1 + valor2;
    document.getElementById('resultado').innerText = 'Resultado: ' + resultado;

}


