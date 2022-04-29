//* validators/register.validator.js
import Joi from 'joi';

const accountSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(7).required().regex(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{7,20}$/),
    firstName: Joi.string().alphanum().min(2).max(30),
    lastName: Joi.string().alphanum().min(2).max(30)
});


export default {account: accountSchema};

