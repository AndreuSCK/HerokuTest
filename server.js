const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


var io = require('socket.io')(http);


// app.get('/', (req, res) => {
//     res.send('Deployed! asdjasdkjasldk');
// });
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
        console.log('message: ' + msg);

    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});