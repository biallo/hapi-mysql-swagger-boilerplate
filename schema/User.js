const Joi = require('joi');

exports.getActivitiesQuery = Joi.object({
  uid: Joi.number()
    .integer()
    .required()
    .description('用户 id'),
});
