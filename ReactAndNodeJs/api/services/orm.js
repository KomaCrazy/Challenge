const schema = require('../configs/schema')
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: ':memory:'
  });


class ORM {
    constructor() {
        this.sequelize = sequelize;
    }

    createDB(table){   
        Object.keys(schema[table]).forEach(key => {
            console.log(`${key} : ${schema[table][key]}`)
        })

    }
}

module.exports = ORM;
