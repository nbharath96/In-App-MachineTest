const { validationResult, body, param } = require("express-validator");

const notesBodyValidation = () => {
    return [
        body("title").exists().isString().withMessage("Title is required"),
        body("description")
            .exists()
            .isString()
            .withMessage("Description is required"),
    ];
};

const paramValidation = () => {
    return [
        param("id")
            .exists()
            .isAlphanumeric()
            .isLength(24)
            .withMessage("Invalid Note ID supplied"),
    ];
};

const validateRequests = (req, res, next) => {
    const error = validationResult(req);

    if (error.isEmpty()) {
        return next();
    }

    return res.status(422).send({ success: false, error: error.array() });
};

module.exports = {
    validateRequests,
    notesBodyValidation,
    paramValidation,
};
