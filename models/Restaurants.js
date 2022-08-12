import sequelize, { Sequelize } from "sequelize";
// "../ significa "volte uma pasta" ele vai sair da pasta e procurar em ouuutra pasta"
import connection from "../config/db.js";

const Restaurant = connection.define(
    'restaurant',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description:{
            type: Sequelize.STRING,
            allowNull: false
         },
        address:{
            type: Sequelize.STRING,
            allowNull: false
        }
        
    }
);

export default Restaurant;
  