const fs = require( 'fs' ),
      path = require( 'path' );

function getFiles( pathFiles, extension, callback ) {
    /** Lee los contenidos de un directorio */
    fs .readdir( pathFiles, ( error , listFiles ) => {
        if ( error ) return callback( error );

        let filteredFiles = listFiles. filter( file => {
            return path .extname( file ) .toLowerCase() === extension;
        });

        callback( null, filteredFiles );    // Ejecuta el CallBack => Enviado a través de la función Filter
    })
}
   
module .exports = getFiles;