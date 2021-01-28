const router = require("express").Router();
const {
    getNotes,
    getAllNotes,
    createNotes,
    editNotes,
    deleteNotes,
} = require("../controllers/notes");
const {
    notesBodyValidation,
    validateRequests,
    paramValidation,
} = require("../middlewares/validator");

router.get("/", getAllNotes);
router.get("/:id", paramValidation(), validateRequests, getNotes);
router.post("/", notesBodyValidation(), validateRequests, createNotes);
router.put("/:id", paramValidation(), validateRequests, editNotes);
router.delete("/:id", paramValidation(), validateRequests, deleteNotes);

module.exports = router;
