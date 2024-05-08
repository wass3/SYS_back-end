const http = require('node:http');

const desiredPort = process.env.PORT ?? 3000;

const processRequest = (request, response) => {
    console.log('Request recived: ', request.url);
    response.end('Hola Mundo');
};

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
    console.log(`Server listening on port http://localhost:${desiredPort}`);
})