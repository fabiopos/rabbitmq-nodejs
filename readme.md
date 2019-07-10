# NodeJS + Docker-RabbitMQ

In this example I create an express simple app to do a get request and send it to a queue

steps:

* run docker-compose up
* npm run dev
* node receiver.js
* make a get request to http://localhost/{put a message here}
* go to RabbitMq management
* check the queues result
