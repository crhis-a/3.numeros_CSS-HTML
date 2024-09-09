function procesarNumeros() {
    // se obtienen los valores de los text area
    let uno = parseInt(document.getElementById("numero1").value);
    let dos = parseInt(document.getElementById("numero2").value);
    let tres = parseInt(document.getElementById("numero3").value);

    // Verificamos que los numeros se han iguales y se montan alertas al usuario
    if (uno === dos) {
        document.getElementById("alerta").innerHTML = "El segundo número es igual al primero. Por favor, introduce un número diferente.";
        document.getElementById("alerta").style.display = "block";
        return; // Salir de la función si hay error
    } else if (tres === uno || tres === dos) {
        document.getElementById("alerta").innerHTML = "El tercer número es igual a uno de los anteriores. Por favor, introduce un número diferente.";
        document.getElementById("alerta").style.display = "block";
        return; // Salir de la función si hay error
    } else {
        document.getElementById("alerta").style.display = "none"; // Ocultar la alerta si no hay errores
    }

    // Crear un arreglo con los números
    let numeros = [uno, dos, tres];

    // Ordenar el arreglo en orden descendente y ascendente
    let ordenDescendente = [...numeros].sort((a, b) => b - a);
    let ordenAscendente = [...numeros].sort((a, b) => a - b);

    // Mostrar los resultados en el textarea de resultados
    document.getElementById("resultado").value = `Descendente: ${ordenDescendente.join(', ')}\nAscendente: ${ordenAscendente.join(', ')}`;
}
