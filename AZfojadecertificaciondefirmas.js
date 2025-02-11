window.onload = function() {
    // Obtener el valor de los parámetroa de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const acta = urlParams.get('acta');
    const folio = urlParams.get('folio');
    const libro = urlParams.get('libro');
    const fechalarga = urlParams.get('fechalarga');
    const escribano = urlParams.get('escribano');
    const registro = urlParams.get('registro');
    const sedenotarial = urlParams.get('sedenotarial');
    const textoparrafo = urlParams.get('textoparrafo');
    const renglon22 = urlParams.get('renglon22');
//    const cargasfiscales = urlParams.get('cargasfiscales');
//    const renglon37a = urlParams.get('renglon37a');
//    const renglon37b = urlParams.get('renglon37b');
//    const observaciones = urlParams.get('observaciones');
//    const fechaexpedicion = urlParams.get('fechaexpedicion');
    
    // Modifica los valores en el html según su ID
    document.getElementById('acta').innerText = acta;
    document.getElementById('folio').innerText = folio;
    document.getElementById('libro').innerText = libro;
    document.getElementById('fechalarga').innerText = fechalarga;
    document.getElementById('escribano').innerText = escribano;
    document.getElementById('registro').innerText = registro;
    document.getElementById('sedenotarial').innerText = sedenotarial;
    document.getElementById('textoparrafo').innerText = textoparrafo;
    document.getElementById('renglon22').innerText = renglon22;
//    document.getElementById('cargasfiscales').innerText = cargasfiscales;
//    document.getElementById('renglon37a').innerText = renglon37a;
//    document.getElementById('renglon37b').innerText = renglon37b;
//    document.getElementById('observaciones').innerText = observaciones;
//    document.getElementById('fechaexpedicion').innerText = fechaexpedicion;
    };
