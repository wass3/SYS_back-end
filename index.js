const mysql = require('mysql2');
const express = require('express');

const app = express();
const port = 3000;

// Configurar la conexión a la base de datos MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'tu_usuario',
    password: 'tu_contraseña',
    database: 'tu_base_de_datos'
});

// Establecer la conexión a la base de datos
connection.connect();

// Definir rutas
app.get('/', (req, res) => {
    // Ejemplo de consulta a la base de datos
    connection.query('SELECT * FROM tabla', (error, results, fields) => {
        if (error) throw error;
        res.send(results);
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
