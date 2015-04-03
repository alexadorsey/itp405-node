var Sequelize = require('sequelize');
var sequelize = require('./../config/sequelize');

var Dvd = sequelize.define('dvd', {
      title: {
          field: 'title',
          type: Sequelize.STRING
      },
      
      award: {
          field: 'award',
          type: Sequelize.STRING
      }
}, {
    timestamps: false
});
 
module.exports = Dvd;