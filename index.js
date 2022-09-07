const app = require('express')();
const service = require('./service/isPrime');

app.get('/test', (_, res) => res.send('Test Passed'));

app.get('/isprime/:number', (req, res) => {
    const result = service.isPrime(req.params.number);
    res.send(result);
});

app.listen(3000, () => console.log("Server up and running"));