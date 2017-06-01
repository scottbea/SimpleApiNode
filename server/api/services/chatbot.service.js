const pd = require('pretty-data').pd;

const messages = [];

export class ChatbotService {
  all() {
    return Promise.resolve(messages);
  }

  byId(id) {
    return this.all().then(r => r[id])
  }

  send(message) {
    console.log(pd.json(message));
    let n = messages.length;
    messages.push(message);
    let response = {};
    response.statusCode = 200;
    response.messageId = n;
    response.requestID = message.requestID;
    response.text = "So you asked me about " + message.text;
    return Promise.resolve(response);
  }
}

export default new ChatbotService();