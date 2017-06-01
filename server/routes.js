import router1 from './api/controllers/chatbot/router';
import router2 from './api/controllers/analytics/router';

export default function routes(app) {
  app.use('/api/v1/messages', router1);
  app.use('/api/v1/analytics', router2);
};