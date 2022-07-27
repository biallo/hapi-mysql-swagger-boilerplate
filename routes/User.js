const UserHandler = require('../handlers/User');
const Schema = require('../schema');

module.exports = [{
  path: '/user/activities',
  method: 'GET',
  options: {
    auth: {
      strategy: 'jwt',
      scope: ['admin', 'user'] // 添加访问权限
    },
    handler: UserHandler.getActivities,
    description: '获取账户活动记录',
    notes: [],
    tags: ['api'],
    validate: {
      query: Schema.getActivitiesQuery
    }
  }
}];
