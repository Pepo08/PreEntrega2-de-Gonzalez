//Simulador ecommerce
const carrito = []

const ordenarMenorMayor = () => {
    productos.sort((a,b)=> a.precio - b.precio);
    mostrarListaOrdenada();
}
const ordenarMayorMenor = () => {
    productos.sort((a,b)=> b.precio - a.precio);
    mostrarListaOrdenada();
}
const mostrarListaOrdenada = () => {
    const listaOrdenada = productos.map(producto => {
        return '- '+producto.nombre+' $'+producto.precio
    });
    alert('Lista de precios:'+'\n\n'+listaOrdenada.join('\n'))
    comprarProductos(listaOrdenada)
}

const comprarProductos = (listaOrdenada) => {
    let otroProducto = false
    let productoNombre = ''
    let productoCantidad = ''
    do {
        productoNombre = prompt('¿Que producto desea comprar?'+'\n\n'+listaOrdenada.join('\n'))
        productoCantidad = parseInt(prompt('¿Cuantos queres comprar?'))
        const cantidadValidada = validarCantidad(productoCantidad)
        const existeProducto = productos.some(producto => producto.nombre.toUpperCase() == productoNombre.toUpperCase())
        if (existeProducto) {
            const producto = productos.find(producto => producto.nombre.toUpperCase() == productoNombre.toUpperCase())
            agregarAlCarrito(producto, productoCantidad)
        }else {
            alert('El producto no se encuentra en las opciones de compra.')
        }
        otroProducto = confirm('¿Desea seguir con su compra?')
    } while (otroProducto);
}

const validarCantidad = (productoCantidad) => {
    while (Number.isNaN(productoCantidad) || productoCantidad === 0) {
        alert('Debe agregar una cantidad válida!')
        productoCantidad = parseInt(prompt('¿Cuantos queres comprar?'))
    }
    return productoCantidad
}

const agregarAlCarrito = (producto, productoCantidad) => {
    const productoNro = producto.nro
    const productoRepetido = carrito.find(producto => producto.nro == productoNro)
    if (!productoRepetido) {
        producto.cantidad += productoCantidad
        carrito.push(producto)
    } else {
        productoRepetido.cantidad += productoCantidad
    }
}
ordenarMenorMayor()
console.log(carrito)
const productosDentroDelCarrito = carrito.length
const CuantosProductosCompraste = () => {
    if(productosDentroDelCarrito == 1){
        alert("El producto que compraste fue el numero "+carrito[0].nro+" el cual es "+carrito[0].nombre)
    }else if(productosDentroDelCarrito == 2){
        alert("Los producto que compraste fueron los numero "+carrito[0].nro+", "+carrito[1].nro + " los cuales son "+carrito[0].nombre+" y "+carrito[1].nombre)
    }else if(productosDentroDelCarrito == 3){
        alert("Los producto que compraste fueron los numero "+carrito[0].nro+", "+carrito[1].nro + " y el "+carrito[2].nro+" los cuales son "+carrito[0].nombre+", "+carrito[1].nombre+" y "+carrito[2].nombre)
    }else if(productosDentroDelCarrito == 4){
        alert("Los producto que compraste fueron los numero "+carrito[0].nro+", "+carrito[1].nro + ", "+carrito[2].nro+" y el "+carrito[3].nro+" los cuales son "+carrito[0].nombre+", "+carrito[1].nombre+", "+carrito[2].nombre+" y "+carrito[3].nombre)
    }else if(productosDentroDelCarrito == 5){
        alert("Los producto que compraste fueron los numero "+carrito[0].nro+", "+carrito[1].nro + ", "+carrito[2].nro+", "+carrito[3].nro+" y el "+carrito[4].nro+" los cuales son "+carrito[0].nombre+", "+carrito[1].nombre+", "+carrito[2].nombre+", "+carrito[3].nombre+" y "+carrito[4].nro)
    }else if(productosDentroDelCarrito == 6){
        alert("Los producto que compraste fueron los numero "+carrito[0].nro+", "+carrito[1].nro + ", "+carrito[2].nro+", "+carrito[3].nro+", "+carrito[4].nro+" y el "+carrito[5].nro+" los cuales son "+carrito[0].nombre+", "+carrito[1].nombre+", "+carrito[2].nombre+", "+carrito[3].nombre+", "+carrito[4].nro+" y " +carrito[5].nombre)
    }else if(productosDentroDelCarrito == 7){
        alert("Los producto que compraste fueron los numero "+carrito[0].nro+", "+carrito[1].nro + ", "+carrito[2].nro+", "+carrito[3].nro+", "+carrito[4].nro+", "+carrito[5].nro+" y el "+carrito[6].nro+" los cuales son "+carrito[0].nombre+", "+carrito[1].nombre+", "+carrito[2].nombre+", "+carrito[3].nombre+", "+carrito[4].nro+", "+carrito[5].nombre+" y "+carrito[6].nombre)
    }else if(productosDentroDelCarrito == 8){
        alert("Los producto que compraste fueron los numero "+carrito[0].nro+", "+carrito[1].nro + ", "+carrito[2].nro+", "+carrito[3].nro+", "+carrito[4].nro+", "+carrito[5].nro+", "+carrito[6].nro+" y el "+carrito[7].nro+" los cuales son "+carrito[0].nombre+", "+carrito[1].nombre+", "+carrito[2].nombre+", "+carrito[3].nombre+", "+carrito[4].nro+", "+carrito[5].nombre+", "+carrito[6].nombre+" y "+carrito[7].nombre)
    }else{
        alert("Tu compra ha sido de todos los productos y numeros posibles")
    }
    
}
CuantosProductosCompraste()