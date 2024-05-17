// src/models/User.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

class User extends Model {
    public id!: number;
    public firstName!: string;
    public lastName?: string;
    public email!: string;
    public birthday!: Date;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    firstName: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    lastName: {
        type: new DataTypes.STRING(128),
        allowNull: true,
    },
    email: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: false,
    }
}, {
    sequelize,
    tableName: 'Users',
});

export default User;
