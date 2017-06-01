import AnalyticsService from '../../services/analytics.service';

export class Controller {
  all(req, res) {
    AnalyticsService
    .all()
    .then(r => res.json(r));
  }
}
export default new Controller();