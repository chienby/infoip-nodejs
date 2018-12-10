const geoip = require('geoip-lite');
const express = require('express');
const app = express();
const port = process.env.port || '3000';

app.get('/', (req, res) => {
    let ip = req.ip;
    return res.json({ ip });
});

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});

