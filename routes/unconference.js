const express = require('express');
const router = express.Router();
const mysql = require('mysql');
/**
 * Move values to environment variables
 */
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'unconf_db'
});

router.get('/', (req, res, next) => {
    res.send({
        info: 'base path for /unconference'
    });
});

router.get('/sessions', (req, res, next) => {
    connection.query("SELECT id, session_title, session_time FROM sessions", function(err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
});

// router.post('/sessions/save', (req, res) => {
//     let sessionData = req.body;
//     connection.query('INSERT INTO sessions SET ?', sessionData,
//         (err, result) => {
//             if (err) throw err;
//             res.send({
//                 result: `Session added to database with ID: ${result.insertId}`
//             });
//         }
//     );
// });

module.exports = router;