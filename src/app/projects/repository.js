const mongoose = require( "mongoose" );

const Project = mongoose.model( "Project" );
const Skill = mongoose.model("Skill")
const Volunteer = mongoose.model("Volunteer")

const createProject = async ( data ) => {

    const project = new Project( data );
    const query = await project.save();
    return query;
};

const addVolunteer = async (data) => {
    const project = Project.find( { _id: data.project_id });
    const newValues = {$push: {volunteers: {sub: data.sub} } };
    const query = await Project.updateOne(newValues, project, (err, res) => {
        console.log(err);
        console.log(res);
    })
}

const findProjects = () => Project.find( );

const findDetails = ( id ) => Project.findOne( { _id: id } );

const deleteProject = ( id ) => Project.deleteOne( {_id: id } );

const updateProject = async ( id, data ) => {
    const project = Project.findOne( {_id: id} );
    const query = await Project.updateOne(data, project);
}

module.exports = {
    createProject,
    findProjects,
    findDetails,
    deleteProject,
    updateProject,
    addVolunteer,
};
