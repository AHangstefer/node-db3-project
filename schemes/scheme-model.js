
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
        .where({id})
        .innerJoin("schemes.scheme_name","schemes.id", "steps.scheme_id")
        .where("schemes.id", "steps.scheme_id" )
        .select("schemes.id", "steps.step_number", "steps.instructions")
         
}

function add(scheme){
    

}


function update(changes,id){


}

function remove(id){


}

