import { DataTypes } from "sequelize";
import db from '../config/db.js'

const Property = db.define('tbb_properties', {
    id:{
        type:DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull:false,
        primaryKey: true
    },
    title: { //* Titulo de la propiedad
        type: DataTypes.STRING(150),
        allowNull: false
    },
    description: { //* Descripcion
        type: DataTypes.TEXT,
        allowNull: false
    },
    rooms: { //* Habitaciones /Cuartos
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    parkinglot: { //* Estacionamientos 
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    wc: { //* Baños
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },street:{
        type: DataTypes.STRING(150),
        allowNull: false
    },lat:{
        type: DataTypes.STRING(150),
        allowNull: false
    },long:{
        type: DataTypes.STRING(150),
        allowNull: false
    },image:{
        type: DataTypes.STRING(150),
        allowNull: false
    },published:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }

})


export default Property