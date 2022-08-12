import sequelize, { Sequelize } from "sequelize";
// "../ significa "volte uma pasta" ele vai sair da pasta e procurar em ouuutra pasta"
import connection from "../config/db.js";

const Review = connection.define(
    'review',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        idRestaurant:{
            type: Sequelize.INTEGER,
            allowNull: false
         },
        Comment:{
            type: Sequelize.STRING,
            allowNull: false
        },
        stars:{
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }
);

export default Review;