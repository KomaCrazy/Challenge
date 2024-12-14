const ORM = require('../services/orm');


async function getList(req, res) {
    const orm = new ORM();    
    orm.createDB("products");    
    res.json();
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