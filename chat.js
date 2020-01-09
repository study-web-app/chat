// --- httpモジュールを利用したサーバー構築 ---
    var http = require('http').createServer(handler);
    var html = require('fs').readFileSync('view/index.html');

    function handler(request, response){
        response.writeHead(200, {'Content-Type':'text/html'});
        response.end(html);
    }

    http.listen(4000);
// -------------------------------------------

var io = require('socket.io')(http);

io.on('connection', function(socket){
    socket.on('chat', function(msg){
    // クライアントからchatイベントを受信したときの処理
        io.emit('chat', msg);
    });
});

// test