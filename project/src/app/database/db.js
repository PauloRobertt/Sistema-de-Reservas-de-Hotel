import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('Sistema_de_Reserva', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres',
});

export default sequelize;
