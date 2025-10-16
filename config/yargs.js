const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const colors = require("colors");

const argv = yargs(hideBin(process.argv))
  .option("b", {
    alias: "base",
    type: "number",
    describe: "Base de la tabla de multiplicar",
    demandOption: true,
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    describe: "Muestra la tabla en consola",
    default: false,
  })
  .option("hasta", {
    alias: "h",
    type: "number",
    describe: "Hasta qué número quieres multiplicar",
    default: 10, // valor por defecto
  })
  .check((argv) => {
    if (isNaN(argv.b)) throw "La base tiene que ser numero";
    if (isNaN(argv.hasta) || argv.hasta <= 0)
      throw "El 'hasta' debe ser un número > 0";
    return true;
  }).argv;

module.exports = argv;
