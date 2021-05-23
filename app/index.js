const express = require('express')
const axios = require('axios');

const PORT = parseInt(process.env.PORT || 9000)

const server = express()

server.get('/ping', (req, res) => {
    res.send('hola mundo!')
})

server.get('/service-a', (req, res) => {
    axios.get('http://1c21-tp-1_bbox_1:9090/').then(function (response){
        res.send(response.data)
    }).catch(function (error){ console.log(error) });
})

server.get('/service-b', (req, res) => {
    axios.get('http://1c21-tp-1_bbox_1:9091/').then(function (response) {
        res.send(response.data)
    });
})

server.get('/loop', (req, res) => {
    var stop = new Date().getTime()+5000;
    while (new Date().getTime() < stop) {
        var number = 57361671 * Math.random();
        var result = number/7;
        if (result > 0){
        }
    }
    res.send('Hello World!')
})


server.listen(PORT, () => console.log(`started server at ${PORT}`))
