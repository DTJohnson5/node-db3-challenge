const dBase = require('../data/db-config.js');

module.exports = {
    get,
    getById,
    getSteps,
    add,
    revise,
    remove
};

function get() {
    return dBase('schemes');
}

function getById() {
    return dBase('schemes').where({id});
}

function getSteps() {
    return dBase('steps as st')
        .join('schemes as sc', 'sc.id', '=', 'st.scheme_id')
        .where({scheme_id: id})
        .select('st.id', 'sc.scheme_name', 'st.step_number', 'st.instructions');
}

function add(scheme) {
    return dBase('schemes').insert(scheme);
}

function revise(modify, id) {
    return dBase('schemes')
    .update(modify)
    .where({id});
}

function remove(id) {
    return('schemes')
    .del()
    .where({id});
}