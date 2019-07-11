const express = require('express');
const fs = require('fs');
const handler = require('./handler');
const router = express.Router();

router.get('/', (req, res) => {
    fs.readFile('server/json/userCart.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({result: 0, text: err}));
        } else {
            res.send(data);
        }
    })
});

router.post('/', (req, res) => {
    handler(req, res, 'add', 'server/json/userCart.json');
});
router.put('/:id', (req, res) => {
    handler(req, res, 'change', 'server/json/userCart.json');
});
router.delete('/:id', (req, res) => {
    handler(req, res, 'remove', 'server/json/userCart.json');
});
router.delete('/', (req, res) => {
    handler(req, res, 'clear', 'server/json/userCart.json');
});

module.exports = router;