const fs = require('fs');

const crearArchivoTabla = async (base = 5, listar) => {
	try {
		let salida = '';

		for (let i = 1; i <= 10; i++) {
			salida += `${base} x ${i} = ${base * i}\n`;
		}

		if (listar) {
			console.log('=============================');
			console.log(`\tTabla del ${base}`);
			console.log('=============================');
			console.log(salida);
		}

		fs.writeFileSync(`tabla-${base}.txt`, salida);

		return `tabla-${base}.txt`;
	} catch (err) {
		throw err;
	}
};

module.exports = {
	crearArchivoTabla,
};
