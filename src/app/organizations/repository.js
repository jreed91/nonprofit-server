const mongoose = require( "mongoose" );

const Organization = mongoose.model( "Organization" );
const Project = mongoose.model( "Project" );

const createOrganization = async ( data ) => {
    const organization = new Organization( data );
    await organization.save();
};

const findOrganizations = () => Organization.find( );

const findDetails = ( id ) => Organization.findOne( { _id: id } );

const deleteOrganization = ( id ) => Organization.deleteOne( { _id: id } );

const updateOrganization = async ( id, data ) => {
    const organization = Organization.findOne( { _id: id } );
    await Organization.updateOne( data, organization );
};

const findRelatedProjects = ( id ) => Project.find( { organization_id: id } );

module.exports = {
    createOrganization,
    findOrganizations,
    findDetails,
    deleteOrganization,
    updateOrganization,
    findRelatedProjects,
};
