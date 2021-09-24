export default class Impuestos{
        constructor(montoBrutoAnual, deducciones) {
            this._montoBrutoAnual = montoBrutoAnual;
            this._deducciones = deducciones;
        }
        get montoBrutoAnual(){
            return this._montoBrutoAnual;
        }
        set montoBrutoAnual(nuevoMontoBrutoAnual){
            this._montoBrutoAnual = nuevoMontoBrutoAnual
        }
        get deducciones(){
            return this._deducciones;
        }
        set deducciones(nuevasdeducciones){
            this._deducciones = nuevasdeducciones
        }
}