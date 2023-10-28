const dataModel = require('../models/models');

module.exports.renderData = async (req, res, next) => {
    const data = await dataModel.fetchAll();
    res.render('template', {
        taskList: data.rows
    });
}

module.exports.createTask = async (req, res, next) => {
    
    const newTask = await dataModel.create(req.body.task);
    if (newTask) {
        res.status(200).json({ status: 'done' });
    } else {
        res.status(500).json({ status: 'error', message: 'Failed to add the task' });
    }

}


module.exports.deleteTask =  (req, res, next) => {
    const deletedTask =  dataModel.delete(req.body.task);
    if (deletedTask) {
        res.status(200).json({ status: 'done' });
    } else {
        res.status(500).json({ status: 'error', message: 'Failed to delete the task' });
    }
}
