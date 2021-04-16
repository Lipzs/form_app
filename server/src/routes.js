import express from 'express';

import FormController from './controllers/FormController.js';

const routes = express.Router();
const formController = new FormController();

routes.post('/schedule', formController.doSchedule);

export default routes;