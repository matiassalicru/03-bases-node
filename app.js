const { crearArchivoTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

// console.log(process.argv);

// const [, , arg3 = 'base=5'] = process.argv;
// const [, base] = arg3.split('=');

// console.log(base);

// const base = 2;
// console.log(argv);
crearArchivoTabla(argv.b, argv.l, argv.h)
	.then(nombreArchivo => console.log(`${nombreArchivo} Creado!`))
	.catch(err => console.log(err));
