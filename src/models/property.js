import { DataTypes } from "sequelize";
import db from '../config/db.js'

const Property = db.define('tbb_properties', {
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull: false
    },
    title:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    description:{
        type: DataTypes.TEXT,
        allowNull:false
    }
    
})