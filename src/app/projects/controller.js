const utilities = require( "../../utilities" );
const repository = require( "./repository" );

exports.create = async( req, res ) => {
    try {
        const { user } = req;
        const project = await repository.createProject(req.body );
        res.success(project);
    } catch ( err ) {
        res.send( err );
    }
};

exports.addVolunteer = async( req, res ) => {
    try {
        const body = req.body;
        const res = await repository.addVolunteer( body );
        console.log(res);
        res.success(res);
    } catch ( err ) {
        res.send( err );
    }
};

exports.update = ( req, res ) => {
    try {
        const details = repository.updateProject( req.params.id, req.body );
        res.success( );
    } catch ( err ) {
        res.send( err );
    }
};

exports.delete = ( req, res ) => {
    try {
        const details = repository.deleteProject( req.params.id );
        res.success( );
    } catch ( err ) {
        res.send( err );
    }
};

exports.list = async ( req, res ) => {
    try {
        const projects = await repository.findProjects();
        res.success( projects );
    } catch ( err ) {
        res.send( err );
    }
};

exports.detail = async ( req, res ) => {
    try {
        const details = await repository.findDetails( req.params.id );
        res.success( details );
    } catch ( err ) {
        res.send( err );
    }
};
