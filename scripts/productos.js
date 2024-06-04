
// OBJETO PRODUCTO
class Producto {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.cantidad = 0;
    }
};

// PRINCIPAL
let producto11 = new Producto("11", "Hamburguesa Royal", 7);

let producto12 = new Producto("12", "Hamburguesa Doble", 7);
let producto13 = new Producto("13", "Hamburguesa Queso", 20);
let producto14 = new Producto("14", "Hamburguesa Pollo", 30);
let producto15 = new Producto("15", "Hamburguesa Vegana", 20);



let productosPrincipal = [producto11, producto12, producto13, producto14, producto15]



// BEBIDAS
let producto21 = new Producto("21", "CocaCola", 5);
let producto22 = new Producto("22", "InkaCola", 5);
let producto23 = new Producto("23", "Agua", 4);
let producto24 = new Producto("24", "Maracuya", 7);
let producto25 = new Producto("25", "Limonada Helada", 12);

let productosBebida = [producto21, producto22, producto23, producto24, producto25]



// ENSALADA
let producto31 = new Producto("31", "Ensalada Normal", 5);
let producto32 = new Producto("32", "Ensalada Palta", 5);
let producto33 = new Producto("33", "Ensalada Frutas", 4);
let producto34 = new Producto("34", "Ensalada Verduras", 7);
let producto35 = new Producto("35", "Ensalada Mixta", 12);

let productosEnsalada = [producto31, producto32, producto33, producto34, producto35]



// TODOS LOS PRODUCTOS
let todosProductos = productosPrincipal.concat(productosBebida).concat(productosEnsalada)
