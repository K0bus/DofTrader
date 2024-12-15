import { Sequelize, Model, DataTypes } from '@sequelize/core';
import { PostgresDialect } from '@sequelize/postgres';
import dotenv from 'dotenv'; // Pour ESM
dotenv.config();

export class User extends Model {}

export const sequelize = new Sequelize({
    dialect: PostgresDialect,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    ssl: false,
    clientMinMessages: 'notice',
});

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        timestamp: {
            type: DataTypes.TIME,
        },
        server: {
            type: DataTypes.STRING,
        },
        itemID: {
            type: DataTypes.INTEGER,
        },
        price: {
            type: DataTypes.INTEGER,
        },
        authorID: {
            type: DataTypes.INTEGER,
        },
    },
    {
        sequelize,
        modelName: 'User',
        indexes: [
            {
                fields: ['id'],
            },
        ],
    }
);

await sequelize.sync();