const express = require('express')
const axios = require('axios');

const PORT = parseInt(process.env.PORT || 9000)

const server = express()

server.get('/ping', (req, res) => {
    res.send('hola mundo!')
})

server.get('/service-a', (req, res) => {
    axios.get('http://bbox:9090/').then(function (response){
        res.send(response.data)
    }).catch(function (error){ console.log(error) });
})

server.get('/service-b', (req, res) => {
    axios.get('http://bbox:9091/').then(function (response) {
        res.send(response.data)
    });
})

server.listen(PORT, () => console.log(`started server at ${PORT}`))
