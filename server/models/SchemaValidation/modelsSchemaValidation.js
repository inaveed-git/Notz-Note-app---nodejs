const Joi = require("joi");

module.exports.noteSchema = Joi.object({
  title: Joi.string().required(),
  body: Joi.string().required(),
});
