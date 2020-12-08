const { Router } = require('express');

const Todo = require('../models/Todo');

const router = Router();

router.get('/', (req, res) => {
    res.json({
        message: "🌎"
    })
})

router.post('/', async (req, res, next) => {
    try {
        const todo = new Todo(req.body);
        const createdTodo = await todo.save();
        res.json(createdTodo);
    } catch (error) {
        next(error);
    }
})

module.exports = router