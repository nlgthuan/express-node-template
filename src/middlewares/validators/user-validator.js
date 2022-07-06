import { celebrate, Segments, Joi } from 'celebrate';

const validator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
});

export default validator;
