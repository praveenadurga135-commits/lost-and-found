const mongoose=require("mongoose");

const itemSchema=new mongoose.Schema({
    item: {
        type: String,
        required: true,
        trim: true
    },
    reward: {
        type: Number,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        enum: ['lost','found']
    },
    returned: {
        type: Boolean,
        default: false
    },
    reportedOn: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Item",itemSchema);