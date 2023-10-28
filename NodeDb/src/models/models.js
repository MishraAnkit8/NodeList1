const {pgPool}  = require('../../config/db.config');

module.exports.fetchAll = ()=>{
    return pgPool.query(`SELECT id,name FROM userData3`);
}

module.exports.create =(taskName) =>{
    const sql = {
        text: 'INSERT INTO dataUser(name) VALUES($1)',
        values: [taskName]
    }
    return pgPool.query(sql);
}

module.exports.delete = (taskName) => {
    return new Promise((resolve, reject) => {

        pgPool.query('DELETE FROM dataUser WHERE name = $1', [taskName], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

