const { Joi } = require("express-validation");
/**
 * Song Validators
 */

const SongValidators = {
    validateCreate: {
        body: Joi.object({
            title: Joi.string().max(75).required(),
            genre: Joi.string().max(25).required(),
            author: Joi.string().max(25).required(),
            length: Joi.number().integer().min(0).required(),
        }),
    },
    validateUpdate: {
        params: Joi.object({
            id: Joi.string().guid().required(),
        }),
        body: Joi.object({
            title: Joi.string().max(75).required(),
            genre: Joi.string().max(25).required(),
            author: Joi.string().max(25).required(),
            length: Joi.number().integer().min(0).required()
        }),
    },
};

module.exports = SongValidators;
