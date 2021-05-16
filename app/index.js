const express = require('express')
const axios = require('axios');

const PORT = parseInt(process.env.PORT || 9000)

const server = express()

server.get('/ping', (req, res) => {
    res.send('hola mundo!')
})

server.get('/9090', (req, res) => {
    axios.get('http://bbox:9090/').then(function (response){
        console.log('al 9090 OK');
    }).catch(function (error){ console.log(error) });
})

server.get('/9091', (req, res) => {
    axios.get('bbox:9091/').then(function (response) {
        console.log('al 9091 OK');
    });
})

server.listen(PORT, () => console.log(`started server at ${PORT}`))
