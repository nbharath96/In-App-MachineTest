const mongoose = require("mongoose");

const notesSchema = mongoose.Schema({
    title: String,
    description: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const notesModel = mongoose.model("notes", notesSchema);

module.exports = notesModel;
