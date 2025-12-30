const mongoose = require("mongoose");

const FoundingMemberSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    phone: String,
    country: String,
    city: String,
    status: String,
    qualification: String,
    govId: String,
    agreed: Boolean,
    createdArt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("FoundingMember", FoundingMemberSchema);