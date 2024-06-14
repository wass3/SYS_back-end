const router = require('express').Router();
const planController = require('../controllers/planController.js');

const planRoute = router;
module.exports = planRoute;


planRoute.get('/', planController.getAllPlans);
planRoute.get('/test', planController.test);

planRoute.post('/create', planController.createPlan);

planRoute.get('/:id', planController.getPlanById);

planRoute.put('/:id', planController.updatePlan);

planRoute.delete('/:id', planController.deletePlan);



// Se hace todos los lunes a las 0:00
// Crear planes

/*
app.post('/crear-planes', (req, res) => {
    const query = `
        SELECT 
            d1.usuario_id AS usuario1_id, 
            d2.usuario_id AS usuario2_id, 
            d1.fecha, 
            GREATEST(d1.hora_inicio, d2.hora_inicio) AS hora_inicio,
            LEAST(d1.hora_fin, d2.hora_fin) AS hora_fin
        FROM 
            Disponibilidad d1
        JOIN 
            Disponibilidad d2 ON d1.fecha = d2.fecha AND d1.usuario_id < d2.usuario_id
        JOIN 
            Preferencias p1 ON d1.usuario_id = p1.usuario_id AND p1.amigo_id = d2.usuario_id
        JOIN 
            Preferencias p2 ON d2.usuario_id = p2.usuario_id AND p2.amigo_id = d1.usuario_id
        WHERE 
            GREATEST(d1.hora_inicio, d2.hora_inicio) < LEAST(d1.hora_fin, d2.hora_fin);
    `;
    db.query(query, (err, results) => {
        if (err) throw err;

        results.forEach(result => {
            const insertQuery = 'INSERT INTO Plan (usuario1_id, usuario2_id, fecha, hora_inicio, hora_fin) VALUES (?, ?, ?, ?, ?)';
            db.query(insertQuery, [result.usuario1_id, result.usuario2_id, result.fecha, result.hora_inicio, result.hora_fin], (err, result) => {
                if (err) throw err;
            });
        });

        res.send('Planes creados');
    });
});
*/
