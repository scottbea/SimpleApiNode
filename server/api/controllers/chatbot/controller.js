import ChatbotService from '../../services/chatbot.service';

export class Controller {
  all(req, res) {
    ChatbotService
    .all()
    .then(r => res.json(r));
  }

  byId(req, res) {
    ChatbotService
      .byId(req.params.id)
      .then(r => {
        if (r) res.json(r)
        else res.status(404).end();
      });
  }

  send(req, res) {
    ChatbotService
        .send(req.body)
        .then(r => res.json(r));
  }
}
export default new Controller();