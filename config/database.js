const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('role_service_db', 'admin', 'PoolG10.11',
  {
    host: 'mariadb.cwizczqy6pft.us-east-1.rds.amazonaws.com',
    dialect: 'mariadb',
    logging: false,
  }
);

module.exports = sequelize;
