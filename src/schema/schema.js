import Joi from "joi";

const schema = Joi.object({
    name: Joi.string().min(3).max(12).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(12).required(),

});

export default schema;