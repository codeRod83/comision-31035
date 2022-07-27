let data = []
let id = 0

const getAll = () => {
    return data
}

const addProd = (title, price, thumbnail) => {
    const productoNuevo = { id: ++id, title, price, thumbnail }
    data.push(productoNuevo)
    return productoNuevo
}

module.exports = { getAll, addProd, data }

const prods = [
    {
        "title": "SSD ADATA SU630 ULTIMATE 240GB",
        "price": 550,
        "thumbnail": "../img/6.png"
    },
    {
        "title": "DISCO DURO WD BLUE 2TB 3.5 SATA 3",
        "price": 950,
        "thumbnail": "../img/6.png"
    },
    {
        "title": "MOUSE LOGITECH G305 LIGHTSPEED",
        "price": 680,
        "thumbnail": "../img/3.png"
    },
    {
        "title": "MONITOR LED 27 DELL S2719DGF QHD 2K 155HZ 1MS",
        "price": 10500,
        "thumbnail": "../img/2.png"
    }   
]
for (let i = 0; i < prods.length; i++) {
    module.exports.addProd(prods[i].title, prods[i].price, prods[i].thumbnail)
}