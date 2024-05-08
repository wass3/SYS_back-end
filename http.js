const http = require('node:http');

const desiredPort = process.env.PORT ?? 3000;

const processRequest = (request, response) => {

    if (request.url === '/') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
    } else if (request.url === '/api') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
    }
    response.end('Hola Mundo');
};

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
    console.log(`Server listening on port http://localhost:${desiredPort}`);
})