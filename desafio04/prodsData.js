let data = []
let id = 0

const getAll = () => {
    return data
}

const getById = (id) => {
    const producto = data.find((prod) => prod.id === id)
    return producto
}

const addProd = (title, price, thumbnail) => {
    const productoNuevo = { id: ++id, title, price, thumbnail }
    data.push(productoNuevo)
    return productoNuevo
}

const updateProd = ( id, title, price, thumbnail ) => {
    const producto = getById(id)
    producto.title = title
    producto.price = price
    producto.thumbnail = thumbnail
    return producto

}

const delProd = (id) => {
    let nuevoData = data.filter(prod => prod.id !== id)
    if (data.length === nuevoData.length) {
        nuevoData = undefined
    }
    data = nuevoData
    return nuevoData
}

module.exports = { getAll, getById, addProd, updateProd, delProd, data }


const prods = [
    {
        "title": "SSD ADATA SU630 ULTIMATE 240GB",
        "price": 550,
        "thumbnail": "https://media.digitalife.com.mx/products/24565/620d910770683.webp"
    },
    {
        "title": "DISCO DURO WD BLUE 2TB 3.5 SATA 3",
        "price": 950,
        "thumbnail": "https://media.digitalife.com.mx/products/9087/60a1b62b3a276.webp"
    },
    {
        "title": "MOUSE LOGITECH G305 LIGHTSPEED",
        "price": 680,
        "thumbnail": "https://media.digitalife.com.mx/products/17227/609e4468d45da.webp"
    },
    {
        "title": "MONITOR LED 27 DELL S2719DGF QHD 2K 155HZ 1MS",
        "price": 10500,
        "thumbnail": "https://media.digitalife.com.mx/products/16064/609daa2f23ed0.webp"
    }   
]
for (let i = 0; i < prods.length; i++) {
    module.exports.addProd(prods[i].title, prods[i].price, prods[i].thumbnail)
}