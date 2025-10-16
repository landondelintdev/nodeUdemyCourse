const { crearArchivo } = require("./helpers/multiplicado");
const argv = require("./config/yargs");
const colors = require("colors");

console.clear();

const base = argv.b;

crearArchivo(argv.b, argv.l, argv.hasta)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creado"))
  .catch((err) => console.log(err));
