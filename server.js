const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hi there blueprint');
});

app.listen(port, () => console.log(`Blueprint app listening on ${port}`));