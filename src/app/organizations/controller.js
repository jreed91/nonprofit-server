const utilities = require( "../../utilities" );
const repository = require( "./repository" );

exports.create = async( req, res ) => {
    try {
        const { user } = req;
        const organization = await repository.createOrganization(req.body );
        res.success(organization);
    } catch ( err ) {
        res.send( err );
    }
};

exports.update = ( req, res ) => {
    try {
        const details = repository.updateOrganization( req.params.id, req.body );
        res.success( );
    } catch ( err ) {
        res.send( err );
    }
};

exports.delete = ( req, res ) => {
    try {
        const details = repository.deleteOrganization( req.params.id );
        res.success( );
    } catch ( err ) {
        res.send( err );
    }
};

exports.list = async ( req, res ) => {
    try {
        const organizations = await repository.findOrganizations();
        res.success( organizations );
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

exports.relatedProjects = async ( req, res ) => {
    try {
        const relatedProjects = await repository.findRelatedProjects( req.params.id );
        res.success( relatedProjects );
    } catch ( err ) {
        res.send( err );
    }
}
