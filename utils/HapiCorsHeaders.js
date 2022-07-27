exports.hapiCorsHeaders = (request, h) => {
  if (!request.headers.origin) {
    return h.continue;
  }

  // depending on whether we have a boom or not,
  // headers need to be set differently.
  var response = request.response.isBoom ? request.response.output : request.response;

  response.headers['Access-Control-Allow-Origin'] = '*';

  if (request.method !== 'options') {
    return h.continue;
  }

  response.statusCode = 200;
  response.headers['Access-Control-Allow-Headers'] = '*';

  response.headers['Access-Control-Allow-Methods'] = 'GET, PUT, POST, DELETE, HEAD, OPTIONS';

  return h.continue;
}
