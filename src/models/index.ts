import { Sequelize } from 'sequelize';

// this is just example, you can use your own env
const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'aamaulana10',
    database: 'birthday_app',
});

export default sequelize;
