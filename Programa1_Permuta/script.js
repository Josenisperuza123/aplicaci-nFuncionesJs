// Función que intercambia los valores de dos variables
function intercambiar() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    
    // Realiza la permutación
    let temp = num1;
    num1 = num2;
    num2 = temp;

    // Muestra el resultado en la página
    document.getElementById('resultado').textContent = `Número 1: ${num1}, Número 2: ${num2}`;
}
