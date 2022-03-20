const {v4:uuidv4}=require('uuid')
class detallesEnvios{
    constructor(id,idEnvios,idPaquetes){
        this.id=uuidv4(),
        this.idEnvios=this.idEnvios
        this.idPaquetes=this.idPaquetes
    }
}

class ListadoDetalleEnvio{
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
        datos.forEach(detallesEnvios => {
            this._listado[detallesEnvios.id]=detallesEnvios
        });
    }
    creardetalleEnvios(datos){
        const detalleEnvio=new detalleEnvios(
            datos.id,
            datos.idEnvios,
            datos.idPaquetes,
            );
        this._listado[detallesEnvios.id]=detallesEnvios;
    }
}
modules.exports={
    ListadoDetalleEnvio
}