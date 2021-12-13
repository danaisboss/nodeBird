import { DataTypes, Model } from "sequelize/dist";
import { dbType } from ".";
import {sequelize} from './sequelize';

class User extends Model {
    public readonly id! : number;
    public nickname! : string;
    public password! : string;
    public userId! : string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}


User.init({
    nickname: {
        type: DataTypes.STRING(20),
    },
    userId: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
},{
    sequelize,
    modelName: 'User',
    tableName: 'User',
    charset: 'utf8',
    collate: 'utf8_general_ci'

});

export const associate = (db: dbType) => {

}

export default User