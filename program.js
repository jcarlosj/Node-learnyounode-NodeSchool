/** NodeSchool.io */

/** 3. Escribe un programa que, usando una llamada síncrona al sistema de
 *     archivos, lea un archivo recibido por argumento e imprima a consola la
 *     cantidad de saltos de línea ('\n') que contiene. 
 * 
 *     Similar a ejecutar cat file | wc -l
 *          $ cat index.html | wc -l
 * 
 *     El programa recibirá la ruta al archivo como único argumento.
*/
const fs = require( 'fs' )
      buffer = fs .readFileSync( './index.html', 'utf8' ),
      lineas = buffer .match( /\r?\n/g ) || '';

console .log( lineas .length );     // 11
