# hapi-mysql-swagger-boilerplate
一个使用 hapi 的简单样板

## 项目依赖
<a href="https://hapi.dev" target="_blank">hapi</a>
<a href="https://github.com/hapi-swagger/hapi-swagger" target="_blank">hapi-swagger</a>
<a href="https://github.com/auth0/node-jsonwebtoken" target="_blank">jsonwebtoken</a>
<a href="https://nodemailer.com/about/">nodemailer</a>

## 环境依赖
确保环境中的 node.js 版本不低于 v14

安装依赖的 node_modules

```
npm install
```

## 本地开发
需要在项目根目录新建一个 `.env` 文件，用于设置 mysql、token secret、程序运行端口等信息，具体格式可参考 `.env.example` 文件。

```
HOST=127.0.0.1
PORT=3001
DB_HOST=127.0.0.1
DB_USER=root
DB_PASS=12345678
DB_NAME=database_name
EMAIL_SMTP=smtp.xxx.xxx
EMAIL_PORT=587
EMAIL_USER=xxx@xxx.xxx
EMAIL_PASS=xxxxxx
SWAGGER=false
TOKEN_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

`DB_*` 用于配置 mysql 的连接信息。

`EMAIL_*` 用于配置邮件服务的信息。

`SWAGGER` 用于配置是否开启 swagger 在线文档服务，推荐仅在本地、测试环境中开启，在开启的状态下启动服务，可通过`/documentation` 路径查看接口文档。

`TOKEN_SECRET` 用于生成用户登录后的 token，请注意开发环境和正式环境的 token secret 最好不同。 

在拥有 node.js 的环境，执行以下命令可以生成所需的 TOKEN_SECRET。

```
node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"
```

启动服务

```
npm start
```

如果想要达到修改代码后，服务自动更新，可使用

```
npm run watch
```

## 在服务器部署
需要在项目根目录新建一个 `.env` 文件，用于设置 mysql、token secret、程序运行端口等信息，具体格式可参考 `.env.example` 文件。

使用如 pm2 的工具运行项目根目录下的 `server.js` 即可。
