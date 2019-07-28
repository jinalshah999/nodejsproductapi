var express = require('express');
var router = express.Router();
var user = require("../models/user");

// www.xyz.com/students/1
router.get('/:id?', function (req, res, next) {
    if (req.params.id) {
      user.getUserByEmail(req.params.id, function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {
      user.getAllUser(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});

router.post('/', function (req, res, next) {

    user.addUser(req.body, function (err, count) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(req.body);//or return count for 1 or 0
        }
    });
});
router.post('/:login', function (req, res, next) {

    if(req.params.login=='login'){
      user.login(req.body.user_email,req.body.user_password, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(count);
        }
    });
    }
    
});
router.delete('/:id', function (req, res, next) {

    user.deleteUser(req.params.id, function (err, count) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(count);
        }
    });
});

router.put('/:id', function (req, res, next) {

    user.updateUser(req.params.id, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports = router;  