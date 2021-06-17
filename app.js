const { crearArchivoTabla } = require('./helpers/multiplicar');
const argv = require('yargs')
	.option('b', {
		alias: 'base',
		type: 'number',
		demandOption: true,
	})
	.option('l', {
		alias: 'listar',
		type: 'boolean',
		demandOption: true,
		default: false,
	})
	.check((argv, options) => {
		if (isNaN(argv.b)) {
			throw `La base tiene que ser un número`;
		}
		return true;
	}).argv;

console.clear();

// console.log(process.argv);

// const [, , arg3 = 'base=5'] = process.argv;
// const [, base] = arg3.split('=');

// console.log(base);

// const base = 2;

crearArchivoTabla(argv.b, argv.l)
	.then(nombreArchivo => console.log(`${nombreArchivo} Creado!`))
	.catch(err => console.log(err));
