import express from 'express';
import ProjectController from '../controllers/projectController.js';

// initializing express router
const projectRouter = express.Router();

// initializing project controller
const projectController = new ProjectController();

// to display project details
projectRouter.get('/:id', projectController.displayProjectDetails);
// to create a new issue
projectRouter.post('/:id/new-issue', projectController.createNewIssue);
// to filter issues of a project
projectRouter.post('/:id/filter', projectController.filterIssues);

export default projectRouter;