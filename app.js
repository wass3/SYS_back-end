const express = require('express');
const crypto = require('node:crypto');
const app = express();
import { userRouter } from './routes/users.js';
import { planRouter } from './routes/plans.js';
const PORT = process.env.PORT ?? 3000;

app.use(express.json());



app.use('/users', userRouter);
app.use('/planes', planRouter);

sequelize.sync(); // Sync all defined models to the database



app.use((req, res) => {
    res.status(404).send('Ruta no encontrada');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})