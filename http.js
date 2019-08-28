/** NodeSchool.io */

/** 6. Escribe un programa que realice una petición HTTP GET a una URL provista
       como primer argumento del programa. Almacena todos los datos recibidos del
       servidor, es decir no sólo el primer evento "data", y luego escribe a
       consola dos líneas:

   » En la primera escribe la cantidad de caracteres recibidos.
   » En la segunda escribe la totalidad de caracteres recibidos (todo el string). 
*/
const http = require( 'http' );

if( process .argv .length < 3 ) {
    console .log( 'Especifique el punto de entrada' );      
    return;
}

const endpoint = process .argv[ 2 ];            // Al ejecutar el programa: $ node http.js "http://api.imgur.com/3/account/me/comments/newest/2"

http .get( endpoint, ( response ) => {
    console .group( 'End Point >', process .argv[ 2 ] );
    //console .log( process );
    console .groupEnd();

    response .setEncoding( 'utf8' );

    response .on( 'error', ( error ) => {
        console .error( 'Error > ', error );
    });

    response .on( 'data', ( data ) => {
        console .log( 'Cadena Recibida >', data );
        console .log( 'Longitud Cadena >', data .length );
    });
});
