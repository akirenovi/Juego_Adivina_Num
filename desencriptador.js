
function mostrarMensaje() {
    let mensaje = localStorage.getItem('mensaje'); // Obtiene el mensaje de localStorage
    let containerMayorTexto = document.getElementById('containerMayorTexto_22');
    if (mensaje) {
        containerMayorTexto.textContent = mensaje; // Muestra el mensaje en el cuadro
    } else {
        containerMayorTexto.textContent = 'No hay mensaje disponible'; // Mensaje por defecto si no hay mensaje
    }
}
function Encriptadora(){
let mensaje1 = document.getElementById('Solicitador_1').value;
let mensaje=encriptar(mensaje1);
localStorage.setItem('mensaje', mensaje); // Guarda el mensaje en localStorage
window.location.href = 'index2.html';
console.log(mensaje)
;

}
function Desencriptadora(){
let mensaje1 = document.getElementById('Solicitador_1').value;
let mensaje=desencriptar(mensaje1);
localStorage.setItem('mensaje', mensaje); // Guarda el mensaje en localStorage
window.location.href = 'index2.html';
console.log(mensaje);

}





function Encriptadora2(){
    let mensaje1 = document.getElementById('Solicitador_2').value;
    let mensaje=encriptar(mensaje1);
    localStorage.setItem('mensaje', mensaje); // Guarda el mensaje en localStorage
    console.log(mensaje);
    mostrarMensaje();
    }
function Desencriptadora2(){
let mensaje1 = document.getElementById('Solicitador_2').value;
let mensaje=desencriptar(mensaje1);
localStorage.setItem('mensaje', mensaje); // Guarda el mensaje en localStorage
console.log(mensaje);
mostrarMensaje();
        }
function copiarTexto() {
    // Obtén el contenido del div como texto
    let div = document.getElementById('containerMayorTexto_22');
    let texto = div.textContent || div.innerText;

    // Usa la API de Portapapeles para copiar el texto
    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado al portapapeles!');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
        alert('Error al copiar el texto.');
    });
}


function validarTexto(texto) {
    return /^[a-z\s]+$/.test(texto);

}


function encriptar(texto) {
    if (!validarTexto(texto)) {
        alert("El texto solo puede contener letras minúsculas sin acentos ni caracteres especiales.");
        return ""
    }

    const mapaEncriptacion = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    return texto.replace(/[eioua]/g, letra => mapaEncriptacion[letra]);
}

function desencriptar(texto) {
    if (!validarTexto(texto)) {
        alert("El texto solo puede contener letras minúsculas sin acentos ni caracteres especiales.");
        return""
    }

    const mapaDesencriptacion = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    return texto.replace(/enter|imes|ai|ober|ufat/g, encriptado => mapaDesencriptacion[encriptado]);
}
function manejarImagen() {
    const imagen = document.querySelector('#containerImageb_1');

    if (window.innerWidth <= 768) {
        // Elimina la imagen si la ventana es menor o igual a 768px
        if (imagen) {
            imagen.remove();
        }
    } else {
        // Restaura la imagen si la ventana es mayor a 768px
        if (!imagen) {
            // Crea la imagen si no existe
            const img = document.createElement('img');
            img.id = 'containerImageb_1';
            img.className = 'containerImageb';
            img.src = './assets/Imagen.png';
            img.alt = 'Imagen encriptador';

            // Inserta la imagen en el contenedor deseado
            const contenedor = document.querySelector('#rectangulo1_1');
            if (contenedor) {
                contenedor.appendChild(img);
            }
        }
    }
}

// Ejecuta la función al cargar la página
window.addEventListener('load', manejarImagen);

// Ejecuta la función al redimensionar la ventana
window.addEventListener('resize', manejarImagen);

mostrarMensaje()
