const fs = require('fs');
const colors = require('colors');

const crearArchivoTabla = async (base = 5, listar, hasta) => {
	try {
		let salida = '';
		let consola = '';

		for (let i = 1; i <= hasta; i++) {
			consola += `${colors.red(base)} ${'x'.gray} ${colors.red(
				i
			)} = ${colors.underline.black(base * i)}\n`;

			salida += `${base} x ${i} = ${base * i}\n`;
		}

		if (listar) {
			console.log('============================='.cyan.underline);
			console.log(`\tTabla del ${base}`.brightMagenta.italic);
			console.log('============================='.cyan.underline);
			console.log(consola);
		}

		fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

		return `tabla-${base}.txt`;
	} catch (err) {
		throw err;
	}
};

module.exports = {
	crearArchivoTabla,
};
