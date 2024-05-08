const express = require('express');
const crypto = require('node:crypto');
const app = express();
import { userRouter } from './routes/users.js';
import { planRouter } from './routes/plans.js';
const PORT = process.env.PORT ?? 3000;

app.use(express.json());



app.use('/users', userRouter);
app.use('/planes', planRouter);


app.post('/crear', (req, res) => {
    const { id, nombre, precio } = req.body;
    const plan = { id, nombre, precio };

    const newPlan = {
        id: crypto.randomUUID(),
        title: 'Plan 1',
    };

    res.status(201).json(newPlan);
});

app.put('/editar', (req, res) => {
    res.status(200).json(req.body);
});

app.delete('/eliminar', (req, res) => {
    res.status(204).send();
});




app.use((req, res) => {
    res.status(404).send('Ruta no encontrada');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})