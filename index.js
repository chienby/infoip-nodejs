const express = require('express');
const geoip = require('geoip-lite');
const requestIp = require('request-ip');
const app = express();
const port = process.env.PORT || '3000';

app.use(requestIp.mw());

app.get('/', (req, res) => {
    let ip = req.clientIp;
    return res.json({ ip });
});

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});

