var db = require('../db');

var product = {

    getAllProduct: function (callback) {
        return db.query("SELECT * from product_tbl", callback);
    },
    getProductById: function (id, callback) {

        return db.query("select * from product_tbl where pro_id=?", [id], callback);
    },
    getProductByProName: function (pro_name, callback) {

        return db.query("select * from product_tbl where pro_name=?", [pro_name], callback);
    },
    addProduct: function (Product, callback) {

        return db.query("Insert into product_tbl values(?,?,?,?,?,?,?)", [null,Product.pro_name, Product.pro_price, Product.pro_desc, Product.pro_qty, Product.pro_mfg,Product.pro_img], callback);
    },
    deleteProduct: function (id, callback) {
        return db.query("Delete from product_tbl where pro_id=?", [id], callback);
    },
    updateProduct: function (id, Product, callback) {
        return db.query("Update product_tbl set pro_name=?,pro_price=?,pro_desc=?,pro_qty=?,pro_mfg=? where pro_id=?", [Product.pro_name, Product.pro_price, Product.pro_desc, Product.pro_qty, Product.pro_mfg, id], callback);
    },
    deleteMultipleProducts: function (item, callback) {

        var delarr = [];
        for (i = 0; i < item.length; i++) {

            delarr[i] = item[i].pro_id;
        }
        return db.query("delete from product_tbl where pro_id in (?)", [delarr], callback);
    }


};
module.exports = product;