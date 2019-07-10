const express = require('express');
const app = express();
const amqp = require('amqplib/callback_api');


app.get('/:msg', (req, res) => {
    createMqMessage(req.params.msg);
    res.send('OK')
});

function createMqMessage(message) {
    amqp.connect('amqp://admin:admin@localhost', function (error0, connection) {
        if (error0) {
            throw error0;
        }
        console.log('Connected to MQ')
        connection.createChannel(function (error1, channel) {
            if (error1) {
                throw error1;
            }
            var queue = 'hello';
            var msg = message;

            channel.assertQueue(queue, {
                durable: false
            });

            channel.sendToQueue(queue, Buffer.from(msg));
            console.log(" [x] Sent %s", msg);
        });
    });
}



app.listen(9000, ()=>{
    console.log('Listening on 9000')


// amqp.connect('amqp://localhost', function(error0, connection) {});


})