import ProjectModel from '../model/projectModel.js';

export default class ProjectController {
    // to display details of a project
    displayProjectDetails(req, res) {
        const projectId = req.params.id;
        const project = ProjectModel.getProjectDetails(projectId);
        if (project) {
            res.status(200).render('projectDetails.ejs',
                { title: 'Issue tracker | Project details', project: project });
        } else {
            res.status(404).render('404error.ejs', { title: 'Issue tracker | 404 error' });
        }
    }

    // to create a new issue
    createNewIssue(req, res) {
        const projectId = req.params.id;
        const project = ProjectModel.createIssue(req.body, projectId);
        res.status(200).render('projectDetails.ejs', { title: 'Issue tracker | Project details', project: project });
    }

    // to filter issues
    filterIssues(req, res) {
        const { ownerFilter, titleFilter, labelFilter } = req.body;
        // console.log(req.body);
        const projectId = req.params.id;
        let labels;
        if(labelFilter){
            labels = labelFilter.split(",").map(e=>e.trim());
        }
        // console.log(labels);
        const project = ProjectModel.filterIssues(projectId, ownerFilter, titleFilter, labels);
        res.status(200).render('projectDetails.ejs', { title: 'Issue tracker | Project details', project: project });
    } 
}