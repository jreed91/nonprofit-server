require( "./model" );
const controller = require( "./controller" );

const express = require( "express" );

const router = express.Router( );

// use apiDoc to generate documentation for API routes
// Details on how to use on: http://apidocjs.com/
// install apidoc globally: npm install apidoc -g
// Generate documentation: apidoc -i src/ -o apidoc/

/**
*    @apiGroup Organization
*    @api {post} / Creating new organization.
*    @apiParam {String} name  The organization's name is required.
*    @apiParam {String} description  The organization's description is required.
*    @apiParam {String} phone
*    @apiParam {String} email
*    @apiParam {String} address
*    @apiParam {String} website
*    @apiParam {String} organization_id  The organization's ID is required.
*    @apiExample {response} Example response:
*       {
*         "organization": {
*            "name": "Tech stuff",
*            "description": "This is the description of the organization",
*            "phone": "555-555-5555",
*            "email": "test@test.com",
*            "address": "111 N 8th Street Des Moines, IA 50309",
*            "website": "www.nonprofit.org",
*            "organization_id": "123"
*           }
*      }
*/
router.post( "/", controller.create );

/**
*    @apiGroup Organization
*    @api {put} /:id Updating an existing organization.
*    @apiParam {String} name
*    @apiParam {String} description
*    @apiParam {String} phone
*    @apiParam {String} email
*    @apiParam {String} address
*    @apiParam {String} website
*/
router.put( "/:id", controller.update );

/**
*    @apiGroup Organization
*    @api {delete} /:id Deleting an existing organization.
*/
router.delete( "/:id", controller.delete );

/**
*    @apiGroup Organization
*    @api {get} / Displaying the list with existing organization.
*/
router.get( "/", controller.list );

/**
*    @apiGroup Organization
*    @api {get} /:id Displaying details of an existing organization.
*/
router.get( "/:id", controller.detail );

module.exports = router;
