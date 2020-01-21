const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');


const port = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());
app.options('*', cors());

io.on('connection', (socket) => {
    socket.on('message', (data) => {
        console.log('message' + data);

        io.emit('message', data);
    })

    socket.on('disconnect', () => {
        console.log('user disconnected')
    });
});

app.get('/index', (req, res) => {
    res.send('Hi');
});

server.listen(port, error => {
    if (error) throw error;
    console.log('Server running on port ' + port);
});