var config = require( './config' ),
    express = require( 'express' ),
    morgan = require( 'morgan' );

module.exports = function() {
    var app = express();

    app.use( morgan( 'dev' ) );

    app.set( 'views', './app/views' );
    app.set( 'view engine', 'ejs' );

    require( '../app/routes/index.server.routes.js' )( app );

    app.use( express.static( './public' ));

    return app;
}
