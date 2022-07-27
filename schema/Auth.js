const Joi = require('joi');

exports.loginPayload = Joi.object({
  email: Joi.string()
    .email({tlds: { allow: false }})
    .required()
    .description('邮箱'),
  pwd: Joi.string()
    .min(8)
    .required()
    .description('密码')
}).label('loginPayload');
