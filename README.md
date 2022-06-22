# test.produce-service
This project can be used to produce message to a local Rabbit MQ instance

## Before Run

Create a .env file on the root folder with the following content:

```
NB_MESSAGES=5
QUEUE=test
MESSAGE_CONTENT=test_message
```

Replace:
- NB_MESSAGES: Nombre de messages to sent to Rabbit MQ
- QUEUE: Queue (or topic) where the messages will be sent
- MESSAGE_CONTENT: Payload 

## Usage

To run this project you will need to run the docker-compose file at first: 

    docker-compose up

Then

    npm install

    npm run dev

Finally you can open: http://localhost:15672 and login using

- username: guest
- password: guest

Check on the queue section if the specified queue ecists and all the messages are there! 😁

