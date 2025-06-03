const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Role = require('./roleModel');

const UserRole = sequelize.define('UserRole', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

Role.hasMany(UserRole, { foreignKey: 'roleId' });
UserRole.belongsTo(Role, { foreignKey: 'roleId' });

module.exports = UserRole;
