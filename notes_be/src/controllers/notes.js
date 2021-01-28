const Notes = require("../models/notes");
const mongoose = require("mongoose");
const _ = require("lodash");

const createNotes = async (req, res, next) => {
    try {
        const { title, description } = req.body;
        const note = await Notes.create({
            title,
            description,
        });
        return res.status(200).send({ success: true, data: note });
    } catch (error) {
        next(error);
    }
};

const getAllNotes = async (_req, res, next) => {
    try {
        const notes = await Notes.find({}, { __v: 0 }).lean();
        return res.status(200).send({ success: true, data: notes });
    } catch (error) {
        next(error);
    }
};

const getNotes = async (req, res, next) => {
    try {
        const note = await Notes.findById(
            mongoose.Types.ObjectId(req.params.id),
            { __v: 0 }
        ).lean();
        if (_.isEmpty(note)) {
            return res
                .status(401)
                .send({ success: false, message: "No notes found" });
        } else {
            return res.status(200).send({ success: true, data: note });
        }
    } catch (error) {
        next(error);
    }
};

const editNotes = async (req, res, next) => {
    try {
        await Notes.updateOne({ _id: req.params.id }, req.body);
        return res.status(200).send({ success: true, data: "Data updated" });
    } catch (error) {
        next(error);
    }
};

const deleteNotes = async (req, res, next) => {
    try {
        const note = await Notes.remove({ _id: req.params.id });
        return res
            .status(200)
            .send({
                success: note ? true : false,
                data: note ? note : "Note not found",
            });
    } catch (error) {
        next(error);
    }
};

module.exports = { createNotes, editNotes, getAllNotes, getNotes, deleteNotes };
