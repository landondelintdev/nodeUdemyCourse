// const crearArchivo = (base = 5) => {

//      console.log("==============================================");
//     console.log("Tabla del",  base);
//     console.log("==============================================");

//         let salida = ``;

//     for (let i = 1; i <= 10; i++) {
//         salida += `salida ${base} x ${i} = ${base + i}\n` ;
//     }
//     console.log(salida);

//     fs.writeFileSync(`tabla-${base}.txt`, salida);

//     console.log(`Tabla${base}.txt creada`);

// }

//No me salio abajo correccion

// const crearArchivo = async (base = 5) => {
//     try {
//         console.log("==============================================");
//         console.log("Tabla del",  base);
//         console.log("==============================================");
//         let salida = ``;
//         for (let i = 1; i <= 10; i++) {
//             salida += `salida ${base} x ${i} = ${base * i}\n` ;
//         }
//         console.log(salida);
//         fs.writeFileSync(`tabla-${base}.txt`, salida);
//         return `Tabla${base}.txt creada`;
//     } catch (err) {
//         throw err;
//     }
//  }

//Correccion sin Async

// const crearArchivo = (base = 5) => {

//     return new Promise ((resolve, reject) => {

//         console.log("==============================================");
//         console.log("Tabla del",  base);
//         console.log("==============================================");

//             let salida = ``;

//         for (let i = 1; i <= 10; i++) {
//             salida += `salida ${base} x ${i} = ${base * i}\n` ;
//         }
//         console.log(salida);

//         fs.writeFileSync(`tabla-${base}.txt`, salida);

//        resolve(`Tabla${base}.txt creada`);

// }

//     )};

//Correcion con Async y Await
const fs = require(`fs`);
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = ``;
    let consola = ``;

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${"x".green} ${i} ${"=".green} ${base * i}\n`;
    }
    if (listar) {
      console.log("==============================================".green);
      console.log("Tabla del".green, colors.cyan(base));
      console.log("==============================================".green);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `Tabla${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
