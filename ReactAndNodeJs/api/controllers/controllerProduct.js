const ORM = require('../services/orm');
const schme = require('../configs/schema')

async function getList(req, res) {
    const orm = new ORM();    
    // orm.createDB()
    res.json(box)    
}

async function addList(req,res){
    let box = {

    }
    res.json();
}

module.exports = {
    getList,
    addList
}