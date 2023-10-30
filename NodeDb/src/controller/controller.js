const dataModel = require('../models/model');

module.exports.renderData = async (req, res, next) => {
    const data = await dataModel.fetchAll();
    console.log(' before rendering the template >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',data.rows)
    res.render('template', {
        taskList: data.rows
    });
    console.log(' after render the template >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',data.rows)
   
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


module.exports.updateTask = async (req, res, next) => {
    const taskId = req.body.id; 
    const taskName = req.body.name; 
    console.log('id>>>>>>>>>>>>>>>>>>>>>>>>>>>',taskId);
    console.log('name >>>>>>>>>>>>>>>>>>>>>>>>>',taskName);

    try {
        const updatedTask = await dataModel.update(taskId, taskName);

        if (updatedTask) {
            res.status(200).json({ status: 'done' });
        } else {
            res.status(500).json({ status: 'error', message: 'Failed to update the task' });
        }
    } catch (error) {
        console.error('Error updating task:', error);
        res.status(500).json({ status: 'error', message: 'Failed to update the task' });
    }
};
