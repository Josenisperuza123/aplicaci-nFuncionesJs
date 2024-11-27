function cuenta(numero) {
    // Inicializar el resultado de la cuenta
    let resultado = '';
    
    // Contar desde 0 hasta el número ingresado
    for (let i = 0; i <= numero; i++) {
        resultado += i + ' ';
    }
    return resultado;
}

function iniciarCuenta() {
    // Obtener el número introducido por el usuario
    const numero = parseInt(document.getElementById('numero').value);
    
    // Llamar a la función cuenta y obtener el resultado
    const resultado = cuenta(numero);
    
    // Mostrar el resultado en la página
    document.getElementById('resultadoCuenta').textContent = resultado;
}
