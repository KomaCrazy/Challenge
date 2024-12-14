const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class ORM {
    constructor() {
        this.sequelize = sequelize;
    }

    createDB(list){
        
        console.table(list);

    }
}

module.exports = ORM;
