const http = require('http');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  const protocol = request.connection.encrypted ? 'https' : 'http';
  const parsedUrl = new URL(request.url, `${protocol}://${request.headers.host}`);
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on port 127.0.0.1:$${port}`);
});
