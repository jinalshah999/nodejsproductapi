var db = require('../db');

var product = {

    getAllUser: function (callback) {
        return db.query("SELECT * from user_tbl", callback);
    },
    getUserByEmail: function (id, callback) {

        return db.query("select * from user_tbl where user_email=?", [id], callback);
    },
    getUserByUserName: function (user_name, callback) {

        return db.query("select * from user_tbl where user_name=?", [user_name], callback);
    },
    addUser: function (User, callback) {

        return db.query("Insert into user_tbl values(?,?,?,?)", [User.user_email,User.user_name,User.user_password,User.user_mobile_no], callback);
    },
    deleteUser: function (id, callback) {
        return db.query("Delete from user_tbl where user_email=?", [id], callback);
    },
    updateUser: function (id,User, callback) {
        return db.query("Update user_tbl set user_name=?,user_password=?,user_mobile_no=? where user_email=?", [User.user_name,User.user_password,User.user_mobile_no,id], callback);
    },
    login:function(user_email,password,callback){
        return db.query("select * from user_tbl where user_email=? and user_password=?",[user_email,password],callback);
    }
};
module.exports = product;