var amqp = require('amqplib/callback_api');

export const runRabbitMQSend = async (): Promise<void> => {

    amqp.connect('amqp://localhost', function(error0: any, connection: any) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1: any, channel: any) {
        if (error1) {
        throw error1;
        }
        var queue = process.env.QUEUE;
        var msg: string = String(process.env.MESSAGE_CONTENT);

        channel.assertQueue(queue, {
        durable: false
        });

        let nb_messages: number = Number(process.env.NB_MESSAGES);

        for(let i=0; i<nb_messages; i++){
            channel.sendToQueue(queue, Buffer.from(msg));
            console.log(` ${i+1} Sent to Queue [${queue}]: Content = ${msg}`);
        }

    });
    });

};
