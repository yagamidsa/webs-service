//helpers
const hbs = require('hbs');


hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear()

});


hbs.registerHelper('capitalizar', (texto) => {

    let palabaras = texto.split(' ');
    palabaras.forEach((palabra, idx) => {
        palabaras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();

    });

    return palabaras.join(' ');



});