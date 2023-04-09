'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class booking_materi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  booking_materi.init({
    id_booking: DataTypes.INTEGER,
    id_materi: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'booking_materi',
  });
  return booking_materi;
};