
function calcularPrecioConDescuento(precio, descuento){
    if ((precio < 0) || (descuento == 0 )){
        alert("El precio debe ser mayor a 0 y el descuento mayor a 0")
    }else{
        const porcentajePrecioConDescuento = 100 - descuento;
        const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

        return precioConDescuento;
    }
}
// creamos un array que contenga los cupones
const coupons = ["Hola", "Como", "Estas","Angel"] 

function calcularDescuentoSegunCupon(price, coupon){

    switch(coupon){
        case coupons[0]:
            var descuento = 10;
            break;
        case coupons[1]:
            var descuento = 20;
            break;

        case coupons[2]:
            var descuento = 30;
            break;
        case coupons[3]:
            var descuento = 50;
            break;
    }
    const precio_con_descuento = calcularPrecioConDescuento(price, descuento)
    return precio_con_descuento
}

// CONECTANDO HTML CON EL .JS
function calcularDescuento(){
    const input1 = document.getElementById("inputPrice");
    const price = input1.value ;

    const input2 = document.getElementById("InputCoupon");
    const coupon = input2.value ;
    var encuentra_coupon = coupons.includes(coupon)
    if (price < 0){
        alert("El precio debe ser mayor a 0");
    }else if (!encuentra_coupon){ 
        alert("No existe ningun cupon denominado -> "+coupon)
    }else{
        const precioConDescuento = calcularDescuentoSegunCupon(price, coupon)
        const result_price = document.getElementById("result_price")
        result_price.innerText = "El precio con descuento es: $"+ precioConDescuento;
    }
}


