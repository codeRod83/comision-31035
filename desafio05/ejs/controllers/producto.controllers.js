const prodsData = require('../prodsData')

class Producto {
    static mostrarTodos() {
        const productos = prodsData.getAll()
        return productos
    }
    static agregar(title, price, thumbnail) {
        const nProducto = prodsData.addProd(title, price, thumbnail)
        return nProducto
    }
    static borrarTodo() {
        const listaVacia = prodsData.deletAll()
        return listaVacia
    }
}

module.exports = Producto