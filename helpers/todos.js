const db = require('../models');

exports.getTodos = function (req, res) {
    db.Todo.find().then(function (data) {
        res.json(data)
    }).catch(function (err) {
        res.send(err);
    });
};

exports.getTodo = function (req, res) {
    const todoId = req.params.todoId;
    db.Todo.findById(todoId).
    then((toDo) => res.json(toDo)).
    catch((err) => res.sedn(err));
};

exports.updateTodo = function (req, res) {
    const todoId = req.params.todoId;
    db.Todo.findOneAndUpdate({
        _id: todoId
    }, req.body, {
        new: true
    }).
    then(updatedToDo => res.json(updatedToDo)).
    catch(err => res.send(err));
};


exports.createTodo = function (req, res) {
    console.log(req.body);
    db.Todo.create(req.body).then(function (newToDo) {
        res.json(newToDo);
    }).catch(function (err) {
        res.send(err);
    });
};

exports.deleteTodo = function (req, res) {
    db.Todo.remove({
        _id: req.params.toDoId
    }).then(res.send('we deleted it')).catch(err => res.send(err));
};


module.exports = exports;
