const {pgPool}  = require('../../config/db.config');

module.exports.fetchAll = ()=>{
    return pgPool.query(`SELECT id,name FROM userData3`);
}


module.exports.create =(taskId) =>{
    const sql = {
        text: `INSERT INTO userdata3(name) VALUES($1) RETURNING id  `,
        values: [taskId] 
        
        
    }
    console.log('sql object >>>>>>>>>>>>>>>>>',sql.values);
    console.log('>>>>>>>>>>>>>>>>>>',sql.text)
   
    return pgPool.query(sql);
}

module.exports.delete = (taskId) => {
    return new Promise((resolve, reject) => {

        pgPool.query('DELETE FROM userdata3 WHERE id = $1', [taskId], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

module.exports.update = (taskId, taskName) => {
    const sql = {
        text: 'UPDATE userdata3 SET name = $1 WHERE id = $2',
        values: [taskName, taskId]
    };
    console.log('sql object >>>>>>>>>>>>>>>>>', sql.values);
    console.log('>>>>>>>>>>>>>>>>>>', sql.text);

    return pgPool.query(sql);
}
