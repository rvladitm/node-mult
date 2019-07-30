const fs = require('fs');
var colors = require('colors');


let listarTabla = (base, limite = 10) => { //puedo definir un limite por defecto, en este caso 10 

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}\n`);
    }
};


let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido: "${base}" no es un numero!`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base} limite hasta ${limite},.txt`, data, (err) => {

            if (err) reject(err);
            else
                resolve(`Tabla-${base}, limite ${limite} ha sido creado!`.green);
        });
    });

};


module.exports = {

    crearArchivo,
    listarTabla
};