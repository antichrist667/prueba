const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('cristiancaiza_naruto', '357693_cris', 'mysql123', {
  host: 'mysql-cristiancaiza.alwaysdata.net',
  dialect: 'mysql'
});

module.exports = sequelize;