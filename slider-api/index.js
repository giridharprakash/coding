const express = require('express')
const cors = require('cors')
const dataJson = require("./data/templates.json");
const app = express()
const port = 3000

app.use(cors());

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/api/themes', (req, res) => {
    res.json(dataJson);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
