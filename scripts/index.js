// AREA DE PRODUCTOS

// Crea boton
const crearBoton = (producto) => {
    return `
    <button id="${producto.id}" class="boton boton__producto" onclick="pedirProductos(${producto.id})" >${producto.title}: ${producto.price}</button>
    `;
};
// AQUI AGREGAR IDENTIFICADOR UNICO

//Imprime botones
const imprimirBotones = (arrayOfProducts, idSelector) => {
    let productsTemplate = "";
    for (element of arrayOfProducts) {
        productsTemplate = productsTemplate + crearBoton(element);
    }
    const productsSelector = document.getElementById(idSelector);
    productsSelector.innerHTML = productsTemplate;
};

imprimirBotones(productosPrincipal, "principal__lista");
imprimirBotones(productosEnsalada, "ensalada__lista");
imprimirBotones(productosBebida, "bebida__lista");

// AREA DE PEDIDO

// ID de lista de pedidos
const lista = document.getElementById("lista__container--pedidos");

// ID de Costo total
const idCostoTotal = document.getElementById("pedido__total");

// Array de pedidos
let pedido = [];

// Costo total del pedido
let costoTotal = 0;

// Actualizar lista
const ActulizarImpresionLista = () => {
    const crearPedido = () => {
        return `
        <div class="orden">
            <div class="orden__title">
                ${element.title}
            </div>
            <div class="orden__costo">
                ${element.price}
            </div>
            <div class="orden__cantidad">
                ${element.cantidad}
            </div>
            <div class="orden__eliminar">
            <button class="boton" onclick="EliminarOrden(${element.id})">
                x
            </button>
            </div>
        </div>
        `;
    };
    let listaDePedidos = "";
    for (element of pedido) {
        listaDePedidos = listaDePedidos + crearPedido(element);
    }
    lista.innerHTML = listaDePedidos;
};

const pedirProductos = (id) => {
    // Busca el producto en productos
    todosProductos.forEach((element) => {
        if (element.id === id.toString()) {
            // Busca si ya hay un producto igual en pedido
            const exists = pedido.some(
                (element) => element.id === id.toString()
            );
            if (!exists) {
                pedido.push(element);

                element.cantidad++;

                ActulizarImpresionLista();

                // Actulizar costoTotal
                costoTotal += element.price;
                idCostoTotal.innerHTML = costoTotal;
            } else {
                element.cantidad++;

                ActulizarImpresionLista();

                //Actualiza el costoTotal
                costoTotal += element.price;
                idCostoTotal.innerHTML = costoTotal;
            }
        }
    });
};

const EliminarOrden = (id) => {
    pedido.forEach((element) => {
        if (element.id === id.toString() && element.cantidad > 1) {
            element.cantidad--;
            ActulizarImpresionLista();
            costoTotal -= element.price;
            idCostoTotal.innerHTML = costoTotal;
        } else if (element.id === id.toString() && element.cantidad === 1) {
            element.cantidad--;
            costoTotal -= element.price;
            idCostoTotal.innerHTML = costoTotal;
            let indice = pedido.indexOf(element);
            pedido.splice(indice, 1);
            ActulizarImpresionLista();
        }
    });
};

const EliminarPedido = () => {
    // Vacia pedidos
    pedido.forEach((element) => (element.cantidad = 0));
    pedido = [];

    //Actualiza la lista de pedidos
    let vacio = "";
    lista.innerHTML = vacio;

    // Vacia costo total
    costoTotal = 0;
    //Actualiza costo total
    idCostoTotal.innerHTML = costoTotal;
};

const Imprimir = () => {
    window.print();
};
