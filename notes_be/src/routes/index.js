const router = require("express").Router();
const indexController = require("../controllers");
const notesRouter = require("./notes");

router.get("/", indexController);
router.use("/notes", notesRouter);

module.exports = router;
