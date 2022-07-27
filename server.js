const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('./package');
const Routes = require('./routes');
const HapiMysql = require('hapi-plugin-mysql');
const HapiAuthJwt2 = require('hapi-auth-jwt2');
const { hapiCorsHeaders } = require('./utils/HapiCorsHeaders');
require('dotenv').config();

// 配置 swagger，根据接口自动生成 API 文档
const swaggerOptions = {
  info: {
    title: 'hapi-mysql-swagger-boilerplate API',
    version: Pack.version
  },
  documentationPage: process.env.SWAGGER === 'true' ? true : false
};

const validate = async function (decoded, request, h) {
  if (decoded.email && decoded.password && decoded.scope) {
    return {
      isValid: true
    };
  } else {
    return {
      isValid: false
    };
  }
};

(async () => {
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: true
    }
  });

  // 注册 swagger 相关插件
  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions
    }
  ]);

  // 注册 mysql 插件
  await server.register({
    plugin: HapiMysql,
    options: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    }
  });

  // 注册 jwt 插件
  await server.register(HapiAuthJwt2);

  server.auth.strategy('jwt', 'jwt', {
    key: process.env.TOKEN_SECRET,
    validate,
    verifyOptions: {
      ignoreExpiration: false
    }
  });

  server.auth.default('jwt');

  server.route(Routes);

  server.ext('onPreResponse', hapiCorsHeaders);

  await server.start();

  console.log('Server running on %s', server.info.uri);
})();
