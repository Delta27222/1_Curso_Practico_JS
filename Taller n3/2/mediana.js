const lista = [1,2,3,4,5]

const mitadLista = parseInt((lista.length) / 2);

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )
    const promedioLista = sumaLista/lista.length;
    return promedioLista;
}

function esPar(numero){
    if (numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}

if (esPar(lista.length)){
    const elemento1 = lista[mitadLista - 1];
    const elemento2 = lista[mitadLista];
    const media_Ele1_Ele2 = calcularMediaAritmetica([elemento1, elemento2]);
    const mediana = media_Ele1_Ele2;
}else{
    const mediana = lista[mitadLista];
}