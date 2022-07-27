const AuthHandler = require('../handlers/Auth');
const Schema = require('../schema');

module.exports = [{
  path: '/auth/login',
  method: 'POST',
  options: {
    auth: false,
    handler: AuthHandler.login,
    description: '用户登录',
    notes: ['成功后返回用户信息和 token'],
    tags: ['api'],
    validate: {
      payload: Schema.loginPayload
    }
  }
}];
