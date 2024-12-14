const ORM = require('../services/orm');

async function getList(req, res) {
    const orm = new ORM();

    let box = {
        "xx":1
    }
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