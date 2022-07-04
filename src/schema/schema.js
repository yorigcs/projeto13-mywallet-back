import DateExtension from '@joi/date';
import JoiImport from 'joi';
const Joi = JoiImport.extend(DateExtension);

const schemaSingUp = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
    confirmPw: Joi.string().min(4).required()
});

const schemaSingIn = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required()
});

const schemaInsertValue = Joi.object({
    user: Joi.string().email().required(),
    value: Joi.string().required().pattern(/^[0-9]+$/),
    type: Joi.any().required().valid("Input","Output"),
    date: Joi.date().format('DD/MM').required(),
    description: Joi.string().min(3).max(20).required()
});

export { schemaSingUp, schemaSingIn, schemaInsertValue };

