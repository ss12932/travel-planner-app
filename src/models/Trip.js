const { Model, Datatypes } = require('sequelize');
const connection = require('../config/connection');

class Trip extends Model {}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  trip_budget: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
    defaultValue: 100,
  },
  traveller_amount: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 100,
  },
  traveller_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      mode: 'traveller',
      key: 'id',
    },
  },
  location_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      mode: 'location',
      key: 'id',
    },
  },
};

const options = {
  sequelize: connection,
  timestamps: true,
  freezeTableName: true,
  underscored: false,
  modelName: 'trip',
};
Trip.init(schema, options);

module.exports = Trip;
