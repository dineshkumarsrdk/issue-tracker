import express from 'express';
import HomeController from '../controllers/homeController.js';

// initializing express router
const homeRouter = express.Router();
// initializing home controller
const homeController = new HomeController();

// to display projects in the home page
homeRouter.get('/', homeController.displayProjects);
// to create a new project
homeRouter.post('/new-project', homeController.createNewProject);

export default homeRouter;