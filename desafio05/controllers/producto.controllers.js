const prodsData = require('../prodsData')

class Producto {
    static mostrarTodos() {
        const productos = prodsData.getAll()
        return productos
    }
    static buscar(id) {
        const producto = prodsData.getById(id)
        return producto
    }
    static agregar(title, price, thumbnail) {
        const nProducto = prodsData.addProd(title, price, thumbnail)
        return nProducto
    }
    static actualizar(id, title, price, thumbnail) {
        const updateProd = prodsData.updateProd(parseInt(id), title, price, thumbnail)
        return updateProd
    }
    static borrar(id) {
        const producto = prodsData.delProd(id)
        return producto
    }
}

module.exports = Producto