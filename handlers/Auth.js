const Jwt = require('jsonwebtoken');
const { sendMail } = require('../utils/Mailer');
const { USER_SCOPE } = require('../utils/Constants');
require('dotenv').config();

// 登录
exports.login = async (request, h) => {
  const { email, pwd } = request.payload;

  // 根据邮箱查询用户信息
  // const result = await request.app.db.query(`
  //   select
  //     *
  //   from
  //     user
  //   where
  //     email="${email}";
  // `);

  // fake result
  const result = [{
    id: 111,
    email: 'xxx@xxx.xxx',
    pwd: 'xxxxxxxx',
    name: 'xxx',
    scope: 1,
    created_time: '2022-01-01T11:11:11.000Z'
  }];

  if (result.length < 1) {
    return {
      code: -1,
      msg: '邮箱或密码错误，请查证后重试'
    }
  }

  const dbPwd = result[0].pwd;

  // 实际项目中，建议对密码等敏感数据做非对称加密后再在网络上传输及存储
  if (dbPwd !== pwd) {
    return {
      code: -1,
      msg: '邮箱或密码错误，请查证后重试'
    };
  }

  // 用户权限
  const scope = USER_SCOPE[result[0].scope];

  // 生成 token
  const jwtUserToken = Jwt.sign(
    {
      email: email,
      password: pwd,
      scope: scope
    },
    process.env.TOKEN_SECRET,
    {
      expiresIn: '5 days'
    }
  );

  // 发送邮件
  // sendMail(
  //   'target@xxx.xxx',
  //   '登录提醒',
  //   `
  //     <div>
  //       <p>您好，</p>
  //       <p>您的账号……</p>
  //     </div>
  //   `
  // );

  return {
    code: 0,
    data: {
      token: jwtUserToken,
      id: result[0].id,
      email: result[0].email,
      name: result[0].name,
      scope: result[0].scope,
      createdTime: result[0].created_time
    }
  };
};
