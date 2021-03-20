const Task = require('../models');

const taskController = {
  // get all tasks
  getAllTasks(req, res){
    Task.find({})
      .then(dbTaskData => res.json(dbTaskData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // get task by id
  getTaskById({ params }, res) {
    Task.findOne({ _id: params.id })
      .then(dbTaskData => res.json(dbTaskData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // create new task 
  createTask({ body }, res) {
    Task.create(body)
      .then(dbTaskData => res.json(dbTaskData))
      .catch(err => console.log(err));
  },

  // update task by id
  updateTask({ params, body }, res) {
    Task.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then(dbTaskData => {
        if (!dbTaskData) {
          res.status(404).json({ message: 'No task found with this id!' });
          return;
        }
        res.json(dbTaskData);
      })
      .catch(err => res.json(err));
  },

  // delete task
  deleteTask({ params }, res) {
    Task.findOneAndDelete({ _id: params.id })
      .then(dbTaskData => {
        if (!dbTaskData) {
          res.status(404).json({ message: 'No task found with this id!' });
          return;
        }
        res.json(dbTaskData);
      })
      .catch(err => res.json(err));
  }
}

module.exports = taskController;