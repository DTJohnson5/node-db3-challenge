const dBase = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
};

function find() {
    return dBase('schemes');
}

function findById(id) {
    return dBase('schemes')
    .where({id})
    .first();
}

function findSteps(id) {
    return dBase('steps as st')
        .join('schemes as sc', 'sc.id', '=', 'st.scheme_id')
        .where({scheme_id: id})
        .select('st.id', 'sc.scheme_name', 'st.step_number', 'st.instructions');
}

function add(scheme) {
    return dBase('schemes').insert(scheme);
}

function update(modify, id) {
    return dBase('schemes')
    .update(modify)
    .where({id});
}

function remove(id) {
    return dBase('schemes')
    .del()
    .where({id});
}