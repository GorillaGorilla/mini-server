var app = require('express')(),
    port = 3050;

app.get('/', function(req, res, next) {
    console.log("get request /");
    res.send('hello, this is a server on freebsd');
});


app.listen(port, function(){
    console.log("server listening on port ", port);
});
