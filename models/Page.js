const Sequelize = require('sequelize');
const db = require('./index').db;

class Page extends Sequelize.Model {
  get route() {
    return '/wiki/' + this.urlTitle
  }
};

Page.init({
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  urlTitle: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  },
}, { sequelize: db, modelName: 'page' });



Page.beforeValidate( function generateUrlTitle (Page) {
  
  if (Page.title) {
    // Remueve todos los caracteres no-alfanuméricos 
    // y hace a los espacios guiones bajos. 
    return Page.urlTitle = Page.title.replace(/\s+/g, '_').replace(/\W/g, '');
  } else {
    // Generá de forma aleatoria un string de 5 caracteres
    return Page.urlTitle = Math.random().toString(36).substring(2, 7);
  }
})







module.exports = Page;  