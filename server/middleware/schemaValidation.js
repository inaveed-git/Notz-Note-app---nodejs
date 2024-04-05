const { noteSchema } = require("../models/SchemaValidation/modelsSchemaValidation.js");
const ExpressError = require("../../utils/ExpressError.js");

module.exports.noteSchemaValidation = (req, res, next) => {
  const { error } = noteSchema.validate(req.body);
  if (error) {
    throw new ExpressError(400, error);
  } else {
    next();
  }
};
