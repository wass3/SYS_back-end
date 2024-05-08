const app = require('./app/app.js');

const port = process.env.PORT ?? 1234;

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});


