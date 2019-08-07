/** NodeSchool.io */

/** 4. Escribe un programa que, usando una llamada asíncrona al sistema de
 *     archivos, lea un archivo recibido por argumento e imprima a consola la
 *     cantidad de saltos de línea ('\n') que contiene. 
 * 
 *     Similar a ejecutar cat file | wc -l
 *          $ cat index.html | wc -l
 * 
 *     El programa recibirá la ruta al archivo como único argumento.
*/
const fs = require( 'fs' )
      
fs .readFile( './index.html', ( error, buffer ) => {
    const strFile = buffer .toString();

    if( error ) {
        throw error;
    }

    lineas = strFile .match( /\r?\n/g ) || '';

    console .log( lineas .length );     // 11
});
      