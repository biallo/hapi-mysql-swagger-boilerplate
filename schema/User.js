const Joi = require('joi');

exports.getActivitiesQuery = Joi.object({
  id: Joi.number()
    .integer()
    .required()
    .description('用户 id'),
});
