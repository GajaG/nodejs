const express = require('express');
var app = express();

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, rsp) => {
    rsp.send('<h1>Hello Express</h1>');
});

app.get('/about',(req,rsp) => {
    rsp.send({
        name: 'Gaja',
        likes: [
            'Cricket',
            'Gaming'
        ]
    });
});

app.get('/bad',(req, rsp) => {
    rsp.send('Error handling the request');
});
app.listen(3000, () => console.log('Server is up on port 3000'));