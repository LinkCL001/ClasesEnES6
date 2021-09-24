export default class Cliente {
    constructor(nombre = '', impuesto = {}){
        this._nombre = nombre;
        this._impuesto = impuesto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    calcularImpuestos() {
        return (this._impuesto.montoBrutoAnual - this.impuesto.deducciones) * 0.21
    }

}

