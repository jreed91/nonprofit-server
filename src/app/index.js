const usersRouter = require( "./users/router" );
const articlesRouter = require( "./articles/router" );
const sessionRouter = require( "./session/router" );
const organizationRouter = require( "./organizations/router" );
const projectRouter = require( "./projects/router" );
const validateToken = require( "../middlewares/validateToken" );

module.exports = ( app ) => {
    app.use( "/organizations", organizationRouter );
    app.use( "/projects", projectRouter );
    app.use( "/session", sessionRouter );
    app.use( "/users", usersRouter );
    app.use( "/articles", validateToken, articlesRouter );
};
