var db=require('../db');

var product={

    getAllProduct: function(callback) {
        return db.query("SELECT * from product_tbl", callback);
    },
    getProduct:function(id,callback){

        return db.query("select * from product_tbl where p_id=?",[id],callback);
    },
    addProduct:function(Product,callback){

        return db.query("Insert into product_tbl values(?,?,?)",[Product.rno,Product.name,Product.mobile_no],callback);
    },
    deleteProduct:function(id,callback)
    {
        return db.query("Delete from product_tbl where p_id=?",[id],callback);
    }


};
module.exports=product;