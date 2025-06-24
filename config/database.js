const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('role_service_db', 'admin', 'Lis.12345',
  {
    host: 'shaggymission.cd5kwh1iyrrb.us-east-1.rds.amazonaws.com',
    dialect: 'mariadb',
    logging: false,
  }
);

module.exports = sequelize;
