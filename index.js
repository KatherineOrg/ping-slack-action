//JavaScript script that uses the @slack/web-api package to post a message to the Slack channel when a pull requst is opened.

const { WebClient } = require('@slack/web-api');

const slackToken = process.env.SLACK_TOKEN;
const slackChannel = process.env.SLACK_CHANNEL;

const web = new WebClient(slackToken);

async function postToSlack(slackToken, slackChannel, pullRequest) {
    const web = new WebClient(slackToken);
    
    try {
        const message = `New pull request opened: <${pullRequest.html_url}|${pullRequest.title}>`;
        await web.chat.postMessage({ 
            channel: slackChannel, 
            text: message 
        });
    } catch (error) {
        console.error(error);
        throw new Error('Failed to post message to Slack');
    }
}

module.exports = {
    postToSlack
};

//Do I need to call main() here?
main();