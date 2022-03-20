const {v4:uuidv4}=require('uuid')
class Envios{
    constructor(descripcion,peso,volumen,clasificacion){
        this.id=uuidv4(),
        this.descripcion=descripcion
        this.peso=peso
        this.volumen=volumen
        this.clasificacion=clasificacion
    }
}

class ListadoPaquetes{
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
        datos.forEach(paquetes => {
            this._listado[paquetes.id]=paquetes
        });
    }
    crearPaquetes(datos){
        const envio=new paquetes(
            datos.id,
            datos.descripcion,
            datos.peso,
            datos.volumen,
            datos.clasificacion,
            );
        this._listado[paquetes.id]=paquetes;
    }
}
modules.exports={
    ListadoPaquetes
}