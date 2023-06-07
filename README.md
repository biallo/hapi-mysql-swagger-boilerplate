# hapi-mysql-swagger-boilerplate

A boilerplate using Hapi

## Project dependencies

- [Hapi](https://hapi.dev)
- [Hapi-Swagger](https://github.com/hapi-swagger/hapi-swagger)
- [Jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [Nodemailer](https://nodemailer.com/about/)

## Project dev dependencies

Make sure you have Node.js >= 14.0.0 installed on your machine.

## Installation

```
npm install
```

## Development

A `.env` file needs to be created in the project root directory, the format can refer to the format in the `.env.example` file.

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

`DB_*` Mysql configuration.

`EMAIL_*` Email service configuration.

`SWAGGER` Swagger configuration, It is recommended to enable it only in the local and test environment, and start the service in the enabled state. You can view the interface documentation through the `/documentation` path.

`TOKEN_SECRET`  Generate the token after the user logs in. Please note that the token secret of the development environment and the official environment should be different.

In an environment with node.js, execute the following command to generate the required TOKEN_SECRET.

```
node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"
```

### Start service

```
npm start
```

Service Automatic Updates

```
npm run watch
```

## Deploy

A `.env` file needs to be created in the project root directory, the format can refer to the format in the `.env.example` file.

Use tools such as pm2 to run `server.js` in the project root directory.
