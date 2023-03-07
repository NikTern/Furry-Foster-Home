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
    breed_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'breed',
        key: 'id',
      }
    },
    //name or id?
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'category',
          key: 'id',
        }
      },
      pet_name: {
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
        allowNull: true,
        default: false,
      },
      // add reference to user id
      Adopted_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model:'userProfile',
          key: 'id',
        }
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