const Task = require('../models/Task');

exports.done = (req, res) => {
  let id = req.params.id;
  Task.find(id)
  .then((task) => {
    return Task.finished(task);
  })
  .then((result) => {
    res.redirect("http://localhost:3000/")
  });
}

exports.store = (req, res) => {
  let task = {};
  task.description = req.body.description;
  Task.create(task).then((id) => {
    // if the request is expecting an ajax or json response
    if (req.xhr || req.headers.accept.indexOf('json') > -1) {
      Task.find(id).then((task) => res.json(task),
      res.redirect("http://localhost:3000/"))
    } else {
      res.redirect("http://localhost:3000/")
    }
  });
}

exports.getTasks = (req, res) => {
  Task.all().then((tasks) => {
    res.json({todos: tasks});
  });
};

  exports.destroy = (req,res) => {
    Task.find(req.params.id)
    .then(task => {
      if (task) {
        return Task.delete(req.params.id);
      }
    })
    .then(() => {
      if (req.xhr || req.headers.accept.indexOf("json") >= 0) {
        res.json({ id: req.params.id })
      } else {
        res.redirect("http://localhost:3000/")
      }
    });
  }
