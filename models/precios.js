const {v4:uuidv4}=require('uuid')
class precios{
    constructor(cantidad,valor,estado,origen,destino,emisor,destinatario){
        this.id=uuidv4(),
        this.cantidad=cantidad
        this.valor=valor
        this.estado=estado
    }
}

class ListadoPrecios{
    constructor(){
        this._listado={};
    }

    get listadoArr(){
        const listado =[];
        Object.keys(this._listado).forEach(key=>{
            const tarea=this._listado[key];
            listado.push(tarea);
        });
        return listado;
    }
    cargarTareasFromArray(datos=[]){
        datos.forEach(precios => {
            this._listado[precios.id]=precios
        });
    }
    crearPrecios(datos){
        const precios=new precios(
            datos.id,
            datos.cantidad,
            datos.valor,
            datos.estado,
            );
        this._listado[precios.id]=precios;
    }
}
modules.exports={
    ListadoPrecios
}