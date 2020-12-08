const { Router } = require('express');

const Todo = require('../models/Todo');

const router = Router();

router.get('/', async (req, res, next) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        next(error);
    }
    
})

router.post('/', async (req, res, next) => {
    try {
        const todo = new Todo(req.body);
        const createdTodo = await todo.save();
        res.json(createdTodo);
    } catch (error) {
        if(error.name === 'ValidationError') {
            res.status(422);
        }
        next(error);
    }
})

module.exports = router