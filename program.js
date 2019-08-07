/** NodeSchool.io */

/** 5.  Crea un programa que dado un directorio imprima una lista de archivos
 *      filtrados por la extensión. El primer argumento será la ruta al directorio
 *      (ej: '/path/dir/') y el segundo la extensión a filtrar, por ejemplo si
 *      recibes 'txt' deberás filtrar todos los archivos que terminen en .txt.
 * 
 *      Nota: el segundo argumento no incluye el punto '.'.
 * 
 *      La lista de archivos a imprimir en consola debe hacerse un archivo por
 *      línea y debes utilizar Async I/O.
*/
const fs = require( 'fs' ),
      path = require( 'path' ),
      EXT = '.txt';
      
fs .readdir( './', ( error, listFiles ) => {
    console .log( listFiles );     

    listTxtFiles = listFiles. filter( file => {
        return path .extname( file ) .toLowerCase() === EXT;
    });

    console .log( listTxtFiles );
    
    listTxtFiles .forEach( file => {
        console .log( file );
    });


});    