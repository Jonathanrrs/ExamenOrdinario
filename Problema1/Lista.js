export default class Lista{
    constructor() {
        this._inicio = null;
        this._fin = null;
    }

    agregar(dato) {
        if(this._inicio==null) {
            this._inicio = dato;
            this._fin = dato;
        }
        else{
            this._fin.siguiente = dato;
            this._fin = dato;
        }
    }

    mover() {
        this._fin._dato = "R";
    }
}