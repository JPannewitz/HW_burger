var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(value, cb) {
    orm.insertOne("burgers", value, function(res) {
      cb(res);
    });
  },
  updateOne: function(col, condition, cb) {
    orm.updateOne("burgers", col, condition, function(res) {
      cb(res);
    });
  }
};


// Export the database functions for the controller (catsController.js).
module.exports = burger;