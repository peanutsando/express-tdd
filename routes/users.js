var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    if (req.query.id === 'abcd') {
        res.json({
            id: 'abcd',
            mail: 'abcd',
            name: 'Mesh'
        })
    } else {
        res.status(403).json({
            msg: 'no user'
        });
    }
});

router.post('/', function(req, res, next) {
    if (Object.getOwnPropertyNames(req.body).length === 0) {
        res.status(400).json({
            msg: 'Bad Request'
        })
        return
    }

    if (req.body.id !== 'abcd' || req.body.pw !== 'abcd') {
        res.status(401).json({
            msg: 'Unauthorized'
        })
        return
    }

    res.json({
        id: 'abcd',
        mail: 'abcd',
        name: 'Mesh'
    })
})

module.exports = router;
