const https = require('https');

function generateRequestBody() {
    return {
        host: process.env.SLACK_BASE,
        path: process.env.SLACK_ENDPOINT,
        method: 'POST'
    };
}

exports.handler = async (event) => {
    return new Promise(((resolve, reject) => {
        const s3Event = event.Records[0].s3;
        const fileName = s3Event.object.key;
        const bucketName = s3Event.bucket.name;

        const slackRequest = {
            text: `The file \`${fileName}\` has been uploaded to the \`${bucketName}\` bucket.`
        };

        const request = https.request(generateRequestBody(), () => {
            resolve('Slack message sent');
        });

        request.on('error', (e) => {
            reject(e.message);
        });

        request.write(JSON.stringify(slackRequest));
        request.end();

        return {
            statusCode: 200,
            body: 'Lambda function has been executed',
        };
    }));
};