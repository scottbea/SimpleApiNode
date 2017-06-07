import router1 from './api/controllers/chatbot/router';
import router2 from './api/controllers/analytics/router';
import router3 from './api/controllers/reservations/router';

export default function routes(app) {
  app.use('/api/v1/messages', router1);
  app.use('/api/v1/analytics', router2);
  app.use('/api/v1/reservations', router3);
};