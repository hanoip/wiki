const Sequelize = require('sequelize');
const db = require('./index').db;

class User extends Sequelize.Model {

};

User.init({
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    }
  }
}, { sequelize: db, modelName: 'user' });

module.exports = User;