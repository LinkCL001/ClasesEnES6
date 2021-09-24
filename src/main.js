import Cliente from './cliente.js';
import Impuestos from './impuesto.js';

let i1 = new Impuestos(1200, 200);
let c1 =  new Cliente('Juan', i1);
let v1 = c1.calcularImpuestos();
console.log(v1);