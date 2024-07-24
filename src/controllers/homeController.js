import ProjectModel from "../model/projectModel.js";

export default class HomeController {
    // to list all projects in the home page
    displayProjects(req, res) {
        const projects = ProjectModel.getAllProjects();
        res.status(200).render('home.ejs', {title: 'Issue tracker | Projects', projects: projects});
    }

    // to create a new project
    createNewProject(req, res) {
        ProjectModel.createProject(req.body);
        const projects = ProjectModel.getAllProjects();
        res.status(200).render('home.ejs', {title: 'Issue tracker | Projects', projects: projects});
    }
}