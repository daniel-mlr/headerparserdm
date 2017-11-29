const express = require('express')

var app = express()
const useragent = require('express-useragent')

const PORT = process.env.PORT || 5000

app.use(useragent.express());

app.get('/', (req, res) => {
    var ip = (req.headers['x-forwarded-for'] ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress).split(",")[0];
    res.send({
        'ipaddress': ip,
        'langage': req.headers["accept-language"].split(',')[0],
        'software': req.useragent.os
        })
    })

app.listen(PORT, () => console.log(`server listening on port ${PORT}`) )
