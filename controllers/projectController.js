const Project = require('../models/Project')

exports.getProjects = async (req, res, next) => {
    try {
        let [projects,_] = await Project.findAll();
        res.status(200).json({ count: projects.length, projects});
    } catch (error){
        console.log(error);
        next(error)
    }
};

exports.postProject = async (req, res, next) => {
    try{
        let { Project_id, Project_name } = req.body;
        let project = new Project( Project_id, Project_name );
        project = await project.save();
        res.status(201).json({ message: "Project created"})

    } catch(error){
        console.log(error)
        next(error)
    }
}

exports.deleteProject = async (req, res, next) => {
    try{
        let projectID = req.params.id;
        await Project.deleteById(projectID);
        res.status(200).json({ message: "Deleted project successfully"})
    } catch (error){
        console.log(error);
        next(error);
    }
}

exports.putProject = async (req, res, next) => {
    try{
        let projectID = req.params.id;
        let { Project_id, Project_name } = req.body;
        let project = new Project( Project_id, Project_name );
        project = await project.update();
        res.status(201).json({ message: "Project updated"})
    } catch (error){
        console.log(error);
        next(error);
    }
}

exports.getProjectById = async (req, res, next) => {
    try{
        let projectID = req.params.id;
        let [project, _] = await Project.findById(projectID);
        res.status(200).json({ project: project[0] });
    } 
    catch(error){
        console.log(error)
        next(error)
    }
}

