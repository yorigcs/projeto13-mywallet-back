import Joi from "joi";

const schemaSingUp = Joi.object({
    name: Joi.string().min(3).max(12).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(12).required(),
    confirmPw: Joi.string().min(3).max(12).required(),
});

export { schemaSingUp };

//type: Joi.any().validate("Input","Output")