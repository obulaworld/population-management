import express from 'express';
import PopulationController from './PopulationController';

const PopulationRouter = express.Router();

PopulationRouter.get(
  '/',
  PopulationController.home,
);

export default PopulationRouter;
