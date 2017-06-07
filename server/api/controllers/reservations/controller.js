import ReservationsService from '../../services/reservations.service';
const util = require('util');


export class Controller {
  getById(req, res) {
    //console.log(util.inspect(req, { showHidden: true, depth: null }));
    ReservationsService
      .GetReservationById(req.params.id, req.query.key)
      .then(r => {
        console.log(r);
        if (r.statusCode === 200) {
          res.json(r.results)
        }
        else {
          res.status(r.statusCode).end();
        }
      });
  }
}
export default new Controller();