# AWS S3 and Slack integration
This lambda function sends a notification on Slack every time a new file is saved in a bucket.

# Environment Variables
| Name             | Description                                   |
| ---------------- | --------------------------------------------- |
| `SLACK_BASE`     | Base URL on Slack (usually `hooks.slack.com`) |
| `SLACK_ENDPOINT` | Complete endpoint to send the message         |