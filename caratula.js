window.onload = function() {
    // Obtener el valor de los parámetroa de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const instrumeto = urlParams.get('instrumeto');
    const otorga = urlParams.get('otorga');
    const afavorde = urlParams.get('afavorde');
    const fecha = urlParams.get('fecha');
    
    // Modifica los valores en el html según su ID
    document.getElementById('instrumeto').innerText = instrumeto;
    document.getElementById('otorga').innerText = otorga;
    document.getElementById('afavorde').innerText = afavorde;
    document.getElementById('fecha').innerText = fecha;
    };
