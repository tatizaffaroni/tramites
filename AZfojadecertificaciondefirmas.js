window.onload = function() {
    // Obtener el valor de los parámetroa de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const acta = urlParams.get('acta');
//    const folio = urlParams.get('folio');
    const libro = urlParams.get('libro');
    const fechalarga = urlParams.get('fechalarga');
//    const escribano = urlParams.get('escribano');
//    const registro = urlParams.get('registro');
//    const sedenotarial = urlParams.get('sedenotarial');
    const textoparrafo = urlParams.get('textoparrafo');
    const renglon22 = urlParams.get('renglon22');
//    const cargasfiscales = urlParams.get('cargasfiscales');
//    const renglon37a = urlParams.get('renglon37a');
//    const renglon37b = urlParams.get('renglon37b');
//    const observaciones = urlParams.get('observaciones');
//    const fechaexpedicion = urlParams.get('fechaexpedicion');
    
    // Modifica los valores en el html según su ID
    document.getElementById('acta').innerText = acta;
    document.getElementById('folio').innerText = numeroATexto(acta);
    document.getElementById('libro').innerText = convertirARomanos(libro);
    document.getElementById('fechalarga').innerText = fechalarga;
//    document.getElementById('escribano').innerText = escribano;
//    document.getElementById('registro').innerText = registro;
//    document.getElementById('sedenotarial').innerText = sedenotarial;
    document.getElementById('textoparrafo').innerText = textoparrafo;
    document.getElementById('renglon22').innerText = renglon22;
//    document.getElementById('cargasfiscales').innerText = cargasfiscales;
//    document.getElementById('renglon37a').innerText = renglon37a;
//    document.getElementById('renglon37b').innerText = renglon37b;
//    document.getElementById('observaciones').innerText = observaciones;
//    document.getElementById('fechaexpedicion').innerText = fechaexpedicion;
    };

function numeroATexto(numero) {
    const unidades = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
    const especiales = ["diez", "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve"];
    const decenas = ["", "diez", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
    const centenas = ["", "cien", "doscientos", "trescientos"];

    if (numero === 100) return "cien";  // Caso especial

    if (numero < 10) return unidades[numero];
    if (numero >= 10 && numero < 20) return especiales[numero - 10];

    if (numero < 30) {
        return (numero === 20) ? "veinte" : "veinti" + unidades[numero % 10];  // Manejo especial de 21-29
    }

    if (numero < 100) {
        let unidad = numero % 10;
        let decena = Math.floor(numero / 10);
        return decenas[decena] + (unidad ? " y " + unidades[unidad] : "");
    }

    if (numero < 200) {
        let resto = numero % 100;
        return "ciento" + (resto ? " " + numeroATexto(resto) : "");
    }

    if (numero <= 250) {
        let centena = Math.floor(numero / 100);
        let resto = numero % 100;
        let textoCentena = centenas[centena];

        return textoCentena + (resto ? " " + numeroATexto(resto) : "");
    }

    return "Número fuera de rango";
}
function convertirARomanos(numero) {
    if (numero < 1 || numero > 250) {
        return "Número fuera de rango";
    }
    
    const valores = [
        200, 100, 90, 50, 40, 10, 9, 5, 4, 1
    ];
    const simbolos = [
        "CC", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"
    ];
    
    let romano = '';
    
    for (let i = 0; i < valores.length; i++) {
        while (numero >= valores[i]) {
            numero -= valores[i];
            romano += simbolos[i];
        }
    }
    
    return romano;
}