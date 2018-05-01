require( "./model" );
const controller = require( "./controller" );

const express = require( "express" );

const router = express.Router( );

// use apiDoc to generate documentation for API routes
// Details on how to use on: http://apidocjs.com/
// install apidoc globally: npm install apidoc -g
// Generate documentation: apidoc -i src/ -o apidoc/

/**
*    @apiGroup Project
*    @api {post} / Creating new project.
*    @apiParam {String} name  The project's name is required.
*    @apiParam {String} description  The project's description is required.
*    @apiParam {Boolean} active
*    @apiParam {[Skills]} skills
*    @apiParam {String} organization_id The project's organization_id is required.
*    @apiParam {String} project_id  The project's ID is required.
*    @apiParam {String} type  The project's type is required.
*    @apiParam {[Volunteers]} volunteers
*    @apiExample {response} Example response:
*       {
*         "project": {
*            "name": "Tech stuff",
*            "description": "This is the description of the project",
*            "active": true,
*            "skills": [{name: "Javascript"}, {name: "React"}],
*            "project_id": "123",
*            "volunteers": [{user_id: 123}]
*           }
*      }
*/
router.post( "/", controller.create );

/**
*    @apiGroup Project
*    @api {put} /:id Updating an existing project.
*    @apiParam {String} name
*    @apiParam {String} description
*    @apiParam {Boolean} active
*    @apiParam {[Skills]} skills
*    @apiParam {String} organization_id
*    @apiParam {String} project_id
*    @apiParam {String} type  The project's type is required.
*    @apiParam {[Volunteers]} volunteers
*/
router.put( "/:id", controller.update );

/**
*    @apiGroup Project
*    @api {delete} /:id Deleting an existing project.
*/
router.delete( "/:id", controller.delete );

/**
*    @apiGroup Project
*    @api {get} / Displaying the list of projects.
*/
router.get( "/", controller.list );

/**
*    @apiGroup Project
*    @api {get} /:id Displaying details of an existing project.
*/
router.get( "/:id", controller.detail );

module.exports = router;
