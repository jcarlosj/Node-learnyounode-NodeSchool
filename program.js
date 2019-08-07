/** NodeSchool.io */

/** 2. Escribe un programa que reciba uno o más números como argumentos de la
 *     consola e imprima la suma de dichos números a consola (stdout).
*/
let suma = 0;
console .log( process .argv );

for( let i = 2; i < process .argv .length; i++ ) {
    suma += Number( process .argv[ i ] );
}

console .log( suma );   // 329    Al ejecutar: $ node program.js 8 34 14 56 74 34 11 32 51 15