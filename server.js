const fs = require('fs')

const prod1 = {
    title: 'Producto 1',
    price: 100,
    thumbnail: 'https://picsum.photos/203/300'
}
const prod2 = {
    title: 'Producto 2',
    price: 200,
    thumbnail: 'https://picsum.photos/203/300'
}
const prod3 = {
    title: 'Producto 3',
    price: 300,
    thumbnail: 'https://picsum.photos/203/300'
}

class Contenedor {
    constructor(filename) {
        this.filename = filename + '.txt'
    }

    async save(object) {
        const defaultState = '[]'
        try {
            const content = await fs.promises.readFile(this.filename, 'utf-8')
            if (content == '' || content == defaultState) {
                const data = JSON.parse(defaultState)
                data.push({ ...object, id: 1 })
                await fs.promises.writeFile(this.filename, JSON.stringify(data, null, 2))
                console.log(data)
                
            } else {
                const data = JSON.parse(content)
                const lastId = data[data.length - 1].id
                data.push({ ...object, id: lastId + 1 })
                console.log(data)
                await fs.promises.writeFile(this.filename, JSON.stringify(data, null, 2))
                
            }
        }
        catch (error) {
            console.log('Error',error)
        }
    }

    async getById(num) {
        try {
            const content = await fs.promises.readFile(this.filename, 'utf-8')
            const data = JSON.parse(content)
            const prod = data.find(element => element.id === num)
            if (prod) {
                console.log(prod)
                return prod
            } else {
                console.log('null')
                return null
            }
        }
        catch (error) {
            console.log(error)
        }

    }

    async getAll() {
        try {
            const content = await fs.promises.readFile(this.filename, 'utf-8')
            const data = JSON.parse(content)
            console.log(data)
            return data
        } catch (error) {
            console.log(error);
        }
    }

    
    async deleteById(num) {
        try {
            const content = await fs.promises.readFile(this.filename, 'utf-8')
            const data = JSON.parse(content)
            const saveData = data.filter(element => element.id !== num)
            await fs.promises.writeFile(this.filename, JSON.stringify(saveData, null, 2))
        } catch (error) {
            console.log('Este archivo no existe',error);
        }
    }
    
    async deleteAll() {
        const content = await fs.promises.readFile(this.filename, 'utf-8')
        const data = []
        await fs.promises.writeFile(this.filename, JSON.stringify(data, null, 2))
        console.log(data);
    }
}

const p = new Contenedor('productos')
// p.save(prod3)
// p.getById(4)
// p.getAll()
// p.deleteById(1)
// p.deleteAll()