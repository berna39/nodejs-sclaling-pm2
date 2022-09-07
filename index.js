const app = require('express')();
const { fork  } = require('child_process');
const service = require('./service/isPrime');

app.get('/test', (_, res) => res.send('Test Passed'));

app.get('/double/:number', (req, res) => {
    const child_process = fork('./service/calculateDouble.js');
    child_process.send({ "number": parseInt(req.params.number) });
    child_process.on("message", message => res.send(message));
});

app.get('/isprime/:number', (req, res) => {
    const result = service.isPrime(req.params.number);
    res.send(result);
});

app.listen(3000, () => console.log("Server up and running"));