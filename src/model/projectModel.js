import { v4 as uuidv4 } from 'uuid';

export default class ProjectModel {
    // constructor() {
    //     this.id = id;
    //     this.title = title;
    //     this.description = description;
    //     this.owner = owner;
    //     this.issues = [];
    // }

    // get all projects
    static getAllProjects() {
        return projects;
    }
    // create new project
    static createProject(projectData) {
        const newProject = {
            id: uuidv4(),
            title: projectData.title,
            description: projectData.description,
            owner: projectData.owner,
            issues: []
        }
        projects.push(newProject);
    }
    // get project details
    static getProjectDetails(projectId) {
        const project = projects.find(project => projectId === project.id);
        if (project) {
            return project;
        }
    }
    // create new issue
    static createIssue(issueData, projectId) {
        const project = projects.find(project => { return projectId === project.id });
        const labels = issueData.issueLabels.split(',');
        if (project) {
            const newIssue = {
                issueTitle: issueData.issueTitle,
                issueDescription: issueData.issueDescription,
                issueLabels: labels,
                issueOwner: issueData.issueOwner
            }
            project.issues.push(newIssue);
            return project;
        }
    }
    // filter issues
    static filterIssues(projectId, owner, titleDescription, labels) {
        // console.log(owner);
        const project = projects.find(project => projectId === project.id);
        let filterResult = { ...project };
        if (owner) {
            owner = owner.toLowerCase();
            filterResult.issues = project.issues.filter(issue => issue.issueOwner.toLowerCase() === owner);
        }
        if (titleDescription) {
            titleDescription = titleDescription.toLowerCase();
            // checking for title match
            const filter1 = filterResult.issues.filter(issue => issue.issueTitle.toLowerCase().includes(titleDescription));
            // checking for description match
            const filter = filterResult.issues.filter(issue => issue.issueDescription.toLowerCase().includes(titleDescription));
            filterResult.issues = filter1;
            for (let e of filter) {
                let flag = false; // to eliminate duplicate entries
                for (let issue of filterResult.issues) {
                    if (issue.issueTitle === e.issueTitle) {
                        flag = true; // if the issue already present
                    }
                }
                if (flag === false) {
                    filterResult.issues.push(e);
                }
            }
        }
        if (labels) {
            labels = labels.map(e => e.toLowerCase());
            // filtering out the issues which contains atleast one match
            filterResult.issues = filterResult.issues.filter(issue =>
                issue.issueLabels.find(label =>
                    labels.find(l => l === label.toLowerCase())
                )
            );
        }
        return filterResult;
    }
}

// storing project locally in an array
const projects = [
    {
        id: uuidv4(),
        title: 'Node.js Project',
        description: 'A demo project on Node.js',
        owner: 'Dinesh',
        issues: [
            {
                issueTitle: 'Demo issue 1',
                issueDescription: 'A demo issue',
                issueLabels: ['Critical', 'High'],
                issueOwner: 'Dinesh'
            },
            {
                issueTitle: 'Demo issue 2',
                issueDescription: 'A demo issue in frontend',
                issueLabels: ['Critical', 'High', 'Business impact'],
                issueOwner: 'Wasim'
            },
            {
                issueTitle: 'New issue',
                issueDescription: 'New issue in application',
                issueLabels: ['Feature', 'Low', 'Bug'],
                issueOwner: 'Vignesh'
            },
            {
                issueTitle: 'Demo issue 3',
                issueDescription: 'A demo issue - data duplication',
                issueLabels: ['Urgent', 'Review'],
                issueOwner: 'Aravind'
            },
            {
                issueTitle: 'New issue 2',
                issueDescription: 'A demo issue - login failure',
                issueLabels: ['Medium', 'Improvement', 'Bug'],
                issueOwner: 'Dineshwar'
            }
        ]
    },
    {
        id: uuidv4(),
        title: 'Demo Project 2',
        description: 'A demo project created for testing purpose',
        owner: 'Karthick',
        issues: [
            {
                issueTitle: 'Demo issue 1',
                issueDescription: 'A demo issue',
                issueLabels: ['Critical', 'High'],
                issueOwner: 'Dinesh'
            },
            {
                issueTitle: 'Demo issue 2',
                issueDescription: 'A demo issue in frontend',
                issueLabels: ['Critical', 'High', 'Business impact'],
                issueOwner: 'Wasim'
            },
            {
                issueTitle: 'New issue',
                issueDescription: 'New issue in application',
                issueLabels: ['Feature', 'Low', 'Bug'],
                issueOwner: 'Vignesh'
            },
            {
                issueTitle: 'Demo issue 3',
                issueDescription: 'A demo issue - data duplication',
                issueLabels: ['Urgent', 'Review'],
                issueOwner: 'Aravind'
            },
            {
                issueTitle: 'New issue 2',
                issueDescription: 'A demo issue - login failure',
                issueLabels: ['Medium', 'Improvement', 'Bug'],
                issueOwner: 'Dineshwar'
            }
        ]
    },
    {
        id: uuidv4(),
        title: 'User management API',
        description: 'A project on user management API for e-com application',
        owner: 'Jahith',
        issues: [
            {
                issueTitle: 'Demo issue 1',
                issueDescription: 'A demo issue',
                issueLabels: ['Critical', 'High'],
                issueOwner: 'Dinesh'
            },
            {
                issueTitle: 'Demo issue 2',
                issueDescription: 'A demo issue in frontend',
                issueLabels: ['Critical', 'High', 'Business impact'],
                issueOwner: 'Wasim'
            },
            {
                issueTitle: 'New issue',
                issueDescription: 'New issue in application',
                issueLabels: ['Feature', 'Low', 'Bug'],
                issueOwner: 'Vignesh'
            },
            {
                issueTitle: 'Demo issue 3',
                issueDescription: 'A demo issue - data duplication',
                issueLabels: ['Urgent', 'Review'],
                issueOwner: 'Aravind'
            },
            {
                issueTitle: 'New issue 2',
                issueDescription: 'A demo issue - login failure',
                issueLabels: ['Medium', 'Improvement', 'Bug'],
                issueOwner: 'Dineshwar'
            }
        ]
    },
    {
        id: uuidv4(),
        title: 'Demo Project 3',
        description: 'A demo project created for testing purpose',
        owner: 'Adithya',
        issues: [
            {
                issueTitle: 'Demo issue 1',
                issueDescription: 'A demo issue',
                issueLabels: ['Critical', 'High'],
                issueOwner: 'Dinesh'
            },
            {
                issueTitle: 'Demo issue 2',
                issueDescription: 'A demo issue in frontend',
                issueLabels: ['Critical', 'High', 'Business impact'],
                issueOwner: 'Wasim'
            },
            {
                issueTitle: 'New issue',
                issueDescription: 'New issue in application',
                issueLabels: ['Feature', 'Low', 'Bug'],
                issueOwner: 'Vignesh'
            },
            {
                issueTitle: 'Demo issue 3',
                issueDescription: 'A demo issue - data duplication',
                issueLabels: ['Urgent', 'Review'],
                issueOwner: 'Aravind'
            },
            {
                issueTitle: 'New issue 2',
                issueDescription: 'A demo issue - login failure',
                issueLabels: ['Medium', 'Improvement', 'Bug'],
                issueOwner: 'Dineshwar'
            }
        ]
    },
    {
        id: uuidv4(),
        title: 'Demo Project 4',
        description: 'A demo project created for testing purpose',
        owner: 'Vetri',
        issues: [
            {
                issueTitle: 'Demo issue 1',
                issueDescription: 'A demo issue',
                issueLabels: ['Critical', 'High'],
                issueOwner: 'Dinesh'
            },
            {
                issueTitle: 'Demo issue 2',
                issueDescription: 'A demo issue in frontend',
                issueLabels: ['Critical', 'High', 'Business impact'],
                issueOwner: 'Wasim'
            },
            {
                issueTitle: 'New issue',
                issueDescription: 'New issue in application',
                issueLabels: ['Feature', 'Low', 'Bug'],
                issueOwner: 'Vignesh'
            },
            {
                issueTitle: 'Demo issue 3',
                issueDescription: 'A demo issue - data duplication',
                issueLabels: ['Urgent', 'Review'],
                issueOwner: 'Aravind'
            },
            {
                issueTitle: 'New issue 2',
                issueDescription: 'A demo issue - login failure',
                issueLabels: ['Medium', 'Improvement', 'Bug'],
                issueOwner: 'Dineshwar'
            }
        ]
    },
    {
        id: uuidv4(),
        title: 'Demo Project 5',
        description: 'A demo project created for testing purpose',
        owner: 'Ashok',
        issues: [
            {
                issueTitle: 'Demo issue 1',
                issueDescription: 'A demo issue',
                issueLabels: ['Critical', 'High'],
                issueOwner: 'Dinesh'
            },
            {
                issueTitle: 'Demo issue 2',
                issueDescription: 'A demo issue in frontend',
                issueLabels: ['Critical', 'High', 'Business impact'],
                issueOwner: 'Wasim'
            },
            {
                issueTitle: 'New issue',
                issueDescription: 'New issue in application',
                issueLabels: ['Feature', 'Low', 'Bug'],
                issueOwner: 'Vignesh'
            },
            {
                issueTitle: 'Demo issue 3',
                issueDescription: 'A demo issue - data duplication',
                issueLabels: ['Urgent', 'Review'],
                issueOwner: 'Aravind'
            },
            {
                issueTitle: 'New issue 2',
                issueDescription: 'A demo issue - login failure',
                issueLabels: ['Medium', 'Improvement', 'Bug'],
                issueOwner: 'Dineshwar'
            }
        ]
    },
    {
        id: uuidv4(),
        title: 'Demo Project 6',
        description: 'A demo project created for testing purpose',
        owner: 'Viswa',
        issues: [
            {
                issueTitle: 'Demo issue 1',
                issueDescription: 'A demo issue',
                issueLabels: ['Critical', 'High'],
                issueOwner: 'Dinesh'
            },
            {
                issueTitle: 'Demo issue 2',
                issueDescription: 'A demo issue in frontend',
                issueLabels: ['Critical', 'High', 'Business impact'],
                issueOwner: 'Wasim'
            },
            {
                issueTitle: 'New issue',
                issueDescription: 'New issue in application',
                issueLabels: ['Feature', 'Low', 'Bug'],
                issueOwner: 'Vignesh'
            },
            {
                issueTitle: 'Demo issue 3',
                issueDescription: 'A demo issue - data duplication',
                issueLabels: ['Urgent', 'Review'],
                issueOwner: 'Aravind'
            },
            {
                issueTitle: 'New issue 2',
                issueDescription: 'A demo issue - login failure',
                issueLabels: ['Medium', 'Improvement', 'Bug'],
                issueOwner: 'Dineshwar'
            }
        ]
    }
]