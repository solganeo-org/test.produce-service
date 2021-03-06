# test.produce-service
This project can be used to produce message to a local Rabbit MQ instance

## Before Run

Create a .env file on the root folder with the following content:

```
NB_MESSAGES=2
QUEUE=test
MESSAGE_CONTENT=test_message
ENDPOINT=https://updates.push.services.mozilla.com/wpush/v2/gAAAAABiqzuJmjwSasRi495T7Trh2oI1jT2lqEfWm2_8q242KN5HFQV0xz8_BpNzoeJ5gxUMkQTFEr1sbDylQClB9fLNm9YnhQO-Cp8sP4chNUk4R0fMpSYvp8V2Y5y3YboJzYsIIxnRXpBaiINN01Hh8XvkmtLWRtRxfFyodx9Z2tI_fSwJP4I
P256DH=BClkO6H3zeCUShhDZG4UxPlYh0DdaJ4GpCgfQUQ6p_2WKYOU4wUiaovjZ83xtffHmcolHPYZ_TE462AXSVVhWZE
AUTH=wDNSNR7Ys2RhJWway6G3cg
```

Replace:
- NB_MESSAGES: Nombre de messages to sent to Rabbit MQ
- QUEUE: Queue (or topic) where the messages will be sent
- MESSAGE_CONTENT: Payload 
- ENDPOINT: endpoint where the notification will be sent
- P256DH: key p256dh generated by the client
- auth: auth key generated by the client to receive notifications

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

