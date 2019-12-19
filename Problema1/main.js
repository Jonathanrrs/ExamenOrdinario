import Lista from "./Lista.js";
import Nodo from "./Nodo.js";

class main{
    constructor() {

        this._lista = new Lista();
    }

    run() {
        this._lista.agregar(new Nodo(1));
        this._lista.agregar(new Nodo(2));
        this._lista.agregar(new Nodo(3));
        this._lista.agregar(new Nodo(4));
        this._lista.agregar(new Nodo(5));
        this._lista.agregar(new Nodo(6));
        this._lista.mover();
    }

}

let m = new main();
m.run();
console.log(m._lista);
