import express from 'express';
import PopulationController from './PopulationController';
import PopulationValidator from '../../middlewares/PopulationValidator';

const PopulationRouter = express.Router();

PopulationRouter.get(
  '/',
  PopulationController.home,
);

PopulationRouter.get(
  '/locations',
  PopulationController.getLocations,
);

PopulationRouter.post(
  '/locations',
  PopulationValidator.checkFields,
  PopulationController.createLocation,
);

PopulationRouter.put(
  '/locations/:locationId',
  PopulationValidator.checkParam,
  PopulationValidator.checkFields,
  PopulationController.updateLocation,
);

PopulationRouter.delete(
  '/locations/:locationId',
  PopulationValidator.checkParam,
  PopulationController.deleteLocation,
);

export default PopulationRouter;
