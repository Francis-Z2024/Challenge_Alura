// Convertir el texto ingresado a minúsculas en tiempo real
function convertirMinusculas() {
    let texto = document.getElementById("inputText");
    texto.value = texto.value.toLowerCase();
}

// Función para encriptar el texto
function encriptar() {
    let texto = document.getElementById("inputText").value.toLowerCase();
    
    // Encriptar el texto usando las reglas definidas
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    // Mostrar el texto encriptado en el campo de salida
    document.getElementById("outputText").value = textoEncriptado;
}

// Función para desencriptar el texto
function desencriptar() {
    let texto = document.getElementById("inputText").value.toLowerCase();
    
    // Desencriptar el texto usando las reglas definidas
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    // Mostrar el texto desencriptado en el campo de salida
    document.getElementById("outputText").value = textoDesencriptado;
}

// Función para copiar el texto al portapapeles
function copiar() {
    let texto = document.getElementById("outputText");
    texto.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}

// Validar que el texto ingresado solo contenga letras minúsculas sin acentos
function validarTexto(texto) {
    const regex = /^[a-z]+$/; // Solo letras minúsculas
    return regex.test(texto);
}

// Función para encriptar el texto
function encriptar() {
    let texto = document.getElementById("inputText").value.toLowerCase();
    
    if (!validarTexto(texto)) {
        alert("Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }

    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("outputText").value = textoEncriptado;
}

// Función para desencriptar el texto
function desencriptar() {
    let texto = document.getElementById("inputText").value.toLowerCase();

    if (!validarTexto(texto.replace(/enter|imes|ai|ober|ufat/g, ''))) {
        alert("Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }

    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("outputText").value = textoDesencriptado;
}


