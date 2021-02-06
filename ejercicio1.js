function comprobacionNumero(array, numero_a_buscar) {
    let contador = 0;
    array.forEach(element => {
        if (element === numero_a_buscar) {
            contador++
        }
    });
    if (contador > 0) {
        return true;
    } else {
        return false;
    }
}

console.log(comprobacionNumero([1, 2, 3, 4], 5));