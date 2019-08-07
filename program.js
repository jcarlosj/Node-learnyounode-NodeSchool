/** NodeSchool.io */

/** 6.  Modularizar el Filtrado de archivos por extensión de forma Asincrona 
 *      Misma funcionalidad del Punto Anterior.
*/
const filter = require('./filter-files'),
      pathFiles = './',
      extension = '.txt';


filter( pathFiles, extension, ( error, files ) => {    // CallBack
    console.log( ' > Ficheros', files );

    files .forEach( file => {
        console .log( file );
    });
});