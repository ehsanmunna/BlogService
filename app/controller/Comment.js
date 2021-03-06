var express = require('express');
const router = express.Router();
const auth = require('../helper/auth');
const service = require('../service/Comment');

// http://localhost:3000/api/v1/app
router.get('/', async (req, res) => {
    try {
        const value = await service.getList();
        res.send(value)
    } catch (error) {
        res.status(500).send(error);
    }
});
// http://localhost:3000/api/v1/app/2
router.get('/:id', async (req, res) => {
    try {
        const value = await service.getById(req.params.id)
        res.send(value)
    } catch (error) {
        response.status(500).send(error);
    }
});
// http://localhost:3000/api/v1/app
router.post('/', auth, async (req, res) => {
    try {
        req.body.userId = req.userId;
        const value = await service.save(req.body);
        res.send(value)
    } catch (error) {
        res.status(500).send(error);
    }
});

router.put('/', async (req, res) => {
    try {
        const value = await service.update(req.body);
        res.send(value)
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete('/', async (req, res) => {
    try {
        const value = await service.delete(req.body);
        res.send(value)
    } catch (error) {
        res.statusCode(500).send(error);
    }
});

module.exports = router;