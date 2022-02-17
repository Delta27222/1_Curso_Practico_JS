




function calcularMediaAritmetica(lista){
    // let sumaLista = 0;
    // for (let i = 0; i <lista.length ; i++){
    //     sumaLista += lista[i];
    // }

    //Manera alterna de hacer un for 
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )

    const promedioLista = sumaLista/lista.length;
    return promedioLista;
}