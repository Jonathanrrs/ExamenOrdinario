import Lista from "./Lista.js.js";
import Nodo from "./Nodo.js.js";

class main{
    constructor() {

        this._lista = new Lista();
    }

    run() {
        this._lista.agregar(new Nodo(7));
        this._lista.agregar(new Nodo(8));
        this._lista.agregar(new Nodo(10));
        this._lista.agregar(new Nodo(11));
 

       

    }

}

let m = new main();
m.run();
console.log(m._lista);