import * as express from 'express';
import controller from './controller'
export default express.Router()
    .post('/send', ::controller.send)
    .get('/', ::controller.all)
    .get('/:id', ::controller.byId);
