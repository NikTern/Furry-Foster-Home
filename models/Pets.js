const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create Pets Model
class Pets extends Model {}

//create fields for Pets Model
Pets.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    //name or id?
    breed_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //name or id?
    category: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      Size: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Sex: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      //what is the data type for a picture stored on cloud?
      Picture: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Cost: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      Location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isAdopted: {
        type: DataTypes.BOOLEAN,
        default: false,
      },
      Adobted_by: {
        type: DataTypes.INTEGER,
        default: false,
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'pets'
  }
);

module.exports = Pets;