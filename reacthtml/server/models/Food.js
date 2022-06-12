const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    employeeName: {
        type: String,
        required: true,
    },
    employeeEmail: {
         type: String,
         required: true,
    },
    employeePassword: {
         type: String,
         required: true,
    },

});

const Food = mongoose.model("Food", FoodSchema);
module.exports = Food;