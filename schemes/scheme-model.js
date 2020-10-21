
const db = require("../data/config")

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}


function find() {
    return db('schemes')
}


function findById(id){
    return db('schemes')
        .where({id})
        .first()
}


function findSteps(id){
    return db('steps')
        
}

function add(scheme){

}


function update(changes,id){


}

function remove(id){


}

