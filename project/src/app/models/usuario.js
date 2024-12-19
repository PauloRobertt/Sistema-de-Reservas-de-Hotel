import { Sequelize, DataTypes } from "sequelize";
import database from '../database/db.js';

const usuario = database.define('usuario', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    senha:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    tipo:{
        type: DataTypes.STRING(40),
        allowNull: false
    }
})

export default usuario;