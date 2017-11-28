const express = require('express')

var app = express()
const useragent = require('express-useragent')
// const util = require('util')

var port = 3000

app.use(useragent.express());
app.get('/', (req, res) => {
    var lang = req.
    res.send('ipaddress: ' + req.ip + ',langage: ' + 
            req.headers["accept-language"].split(',')[0] + 
            ',software:' + req.useragent.os)
})

app.listen(port, () => {
    console.log('server listening on port ' + port)
})
