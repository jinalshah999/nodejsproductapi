var express = require('express');
var router = express.Router();
var product = require("../models/product");

// www.xyz.com/students/1
router.get('/:id?', function (req, res, next) {
    if (req.params.id) {
        product.getProductById(req.params.id, function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {
        product.getAllProduct(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});
router.get('/:search/:para', function (req, res, next) {

    if (req.params.search == 'search') {
        product.getProductByProName(req.params.para,function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});
router.post('/', function (req, res, next) {

    product.addProduct(req.body, function (err, count) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(req.body);//or return count for 1 or 0
        }
    });
});
router.post('/:id', function (req, res, next) {

    product.deleteMultipleProducts(req.body, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(count);
        }
    });
});
router.delete('/:id', function (req, res, next) {

    product.deleteProduct(req.params.id, function (err, count) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(count);
        }
    });
});

router.put('/:id', function (req, res, next) {

    product.updateProduct(req.params.id, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports = router;  