import Megjelenitsor from "./Megjelenitsor.js";
class Megjelenit{
    #list = [];
    constructor(list, szuloElem){
        this.#list = list;
        szuloElem.append(`<table class="table">`)
        this.tablaElem = szuloElem.children("table");
        console.log(this.tablaElem);
        this.megjelenit();

}
megjelenit(){
    let txt = "";
   this.#list.forEach((index) => {
       new Megjelenitsor(index, this.tablaElem)
    });
}
}
export default Megjelenit;