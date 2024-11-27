function verificarNumero(numero) {
    // Determinar si el número es positivo, negativo o nulo
    if (numero > 0) {
        return "El número es positivo";
    } else if (numero < 0) {
        return "El número es negativo";
    } else {
        return "El número es nulo";
    }
}

function verificarNumeroUsuario() {
    // Obtener el número introducido por el usuario
    const numero = parseInt(document.getElementById('numeroVerificar').value);
    
    // Llamar a la función verificarNumero y obtener el mensaje
    const resultado = verificarNumero(numero);
    
    // Mostrar el resultado en la página
    document.getElementById('resultadoVerificar').textContent = resultado;
}
