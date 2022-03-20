const {v4:uuidv4}=require('uuid')
class Seguimientos{
    constructor(idEnvios,fecha,hora,lugar){
        this.idEnvios=uuidv4(),
        this.fecha=fecha
        this.hora=hora
        this.lugar=lugar
    }
}

class ListadoSeguimientos{
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
        datos.forEach(Seguimientos => {
            this._listado[Seguimientos.idEnvios]=Seguimientos
        });
    }
    crearSeguimientos(datos){
        const envio=new Seguimientos(
            datos.idEnvios,
            datos.fecha,
            datos.hora,
            datos.lugar,
            );
        this._listado[Seguimientos.idEnvios]=idEnvios;
    }
}
modules.exports={
    ListadoSeguimientos
}