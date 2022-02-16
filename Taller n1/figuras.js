//Código del cuadrado-----------------------------------------------------------------------------------------
console.group("Cuadrados")
// const lado_cuadrado = 5; 
// console.log('Lados del cuadrado miden: ' + lado_cuadrado + 'cm')

function perimetro_cuadrado(lado){
    return lado*4;
};
// console.log('El perímetro del cuadrado es: ' + perimetro_cuadrado + 'cm')

function area_cuadrado(lado){
    return lado*lado;
};
// console.log('El área del cuadrado es: ' + area_cuadrado + 'cm^2')
console.groupEnd();

//Código del triángulo------------------------------------------------------------------------------------------
console.group("Triangulos")
// const lado_triangulo1 = 6; 
// const lado_triangulo2 = 6;
// const base_triangulo = 4;
// const altura_triangulo = 5.5;
// console.log('Los lados del triángulo miden: ' 
//     + lado_triangulo1 
//     + 'cm, '
//     + lado_triangulo2 
//     + 'cm, '+ base_triangulo 
//     + 'cm'
// )
// console.log('El altura del triángulo es: ' + altura_triangulo + 'cm')

function perimetro_triangulo(lado1, lado2, base){

    return (Number(lado1) + Number(lado2) + Number(base));
};
// console.log('El perímetro del triángulo es: ' + perimetro_triangulo + 'cm')
function area_triangulo(base, altura){
    return (base * altura) / 2;
};
// console.log('El área del triángulo es: ' + area_triangulo + 'cm^2')

function alturaTriangulo (lado1, lado2, base){
    
    if (lado1 != lado2){
        alert("Los lados no puede ser distintos, TIENEN QUE SER IGUALES")
        return null;
    }else{
        const mitadBase = base/2;
        const altura = Math.sqrt((lado1**2)-(mitadBase**2))
        return altura;
    }
}

console.groupEnd();

// Código del circulo-------------------------------------------------------------------------------------------------
console.group("Círculos")
// const radio_circulo = 4
// console.log('El radio del círculo es: ' + radio_circulo + 'cm')
function diametro_circulo(radio){
    return 2 * radio
};
// console.log('El diámetro del círculo es: ' + diametro_circulo + 'cm')
const PI = Math.PI 
console.log('PI es: ' + PI)
function perimetro_circulo(radio){
    const diametro = diametro_circulo(radio)
    return diametro * PI

};
// console.log('El perímetro del círculo es: ' + perimetro_circulo + 'cm')
function area_circulo(radio){
    return (radio * radio) * PI
};
// console.log('El área del círculo es: ' + area_circulo + 'cm^2')
console.groupEnd();

// CONECTANDO HTML CON EL .JS

// CUADRADO---------------------------------------------------------------------------------------------------
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetro_cuadrado(value);
    alert("El perímetro del cuadrado es: "+perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = area_cuadrado(value);
    alert("El área del cuadrado es: "+area);
}

// TRIÁNGULO---------------------------------------------------------------------------------------------------
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputTrianguloLado1");
    const lado1Value = input1.value;
    const input2 = document.getElementById("inputTrianguloLado2");
    const lado2Value = input2.value;
    const input3 = document.getElementById("inputTrianguloBase");
    const baseValue = input3.value;

    const perimetro = perimetro_triangulo(lado1Value, lado2Value, baseValue);
    alert("El perímetro del triángulo es: "+perimetro);
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("inputTrianguloLado1");
    const lado1Value = input1.value;
    const input2 = document.getElementById("inputTrianguloLado2");
    const lado2Value = input2.value;
    const input3 = document.getElementById("inputTrianguloBase");
    const baseValue = input3.value;

    const area = area_triangulo(baseValue, alturaTriangulo(lado1Value, lado2Value, baseValue))
    alert("El área del triángulo es: "+area+ ", con una altura igual a: "+alturaTriangulo(lado1Value, lado2Value, baseValue));
}
// CÍRCULO------------------------------------------------------------------------------------------------------
function calcularPerimetroCirculo(){
    const input1 = document.getElementById("inputRadioCirculo");
    const radio = input1.value;
    const perimetro = perimetro_circulo(radio)
    alert("El perímetro del círculo es: "+perimetro);
}


function calcularAreaCirculo(){
    const input1 = document.getElementById("inputRadioCirculo");
    const radio = input1.value;

    const area = area_circulo(radio)
    alert("El área del círculo es: "+area);
}