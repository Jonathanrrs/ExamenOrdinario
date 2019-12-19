export default class Lista {
    constructor() {
        this._inicio = null;
        this._fin = null;
    }

    agregar(dato) {
        if (this._inicio == null) {
            this._inicio = dato;
            this._inicio.siguiente = dato;
            this._fin = dato;
            this._fin.siguiente = this._inicio;
        }
        else if (this._inicio == this._fin) {
            this._inicio.siguiente = dato;
            dato.siguiente = this._inicio;
            this._inicio = dato;
            this._fin = this._inicio.siguiente;
        }
        else{
            let temp = this._inicio;
            while(temp.siguiente!=this._fin){
                temp = temp.siguiente;
            }
            temp.siguiente = dato;
            temp.siguiente.siguiente = this._fin;
        }

    }
}