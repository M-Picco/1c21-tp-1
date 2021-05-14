const express = require('express')

const PORT = parseInt(process.env.PORT || 9000)

const server = express()

server.get('/ping', (req, res) => {
    res.send('hola mundo!')
})

server.listen(PORT, () => console.log(`started server at ${PORT}`))
