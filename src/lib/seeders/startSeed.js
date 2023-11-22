/*Para insertar multiples datos en la base jaja */
import {exit} from 'node:process'
import Category from '../../models/category.js'
import categories from './categorySeed.js'
import db from '../../config/db.js'
import Price from '../../models/price.js'
import prices from './priceSeed.js'

const importData = async () => {
    try{
        //Autenticar
        await db.authenticate()
        //Generar columnas
        await db.sync()
        //Importar los datos
        await Promise.all([ Category.bulkCreate(categories), Price.bulkCreate(prices)])
        console.log(`Se han importado los datos de las tablas catalogo de manera correcta`);
        exit
    }catch(err){
        console.log(err)
        exit(1);
    }

}

if(process.argv[2] === "-i"){
    importData();

}

//0 node, 1 seeder, 2 argumento