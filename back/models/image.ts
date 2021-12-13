import { Model, DataTypes } from "sequelize"
import { dbType } from ".";
import { sequelize } from "./sequelize";


class Image extends Model {
    public readonly id!: number,
    public src!: string,
    public readonly createAt!: Date,
    public readonly updateAt!: Date,
}

Image.init({
    src:{
        type: DataTypes.STRING(200),
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'Image',
    tableName: 'image',
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci'
});
–
export const associate = (db:dbType) => {

}

export default Image;