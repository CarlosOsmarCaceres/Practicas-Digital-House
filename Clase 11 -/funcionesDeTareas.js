const fs = require("fs");


let funcionesDeTareas = {
    leerJson: function (){
        let tareasJson = fs.readFileSync("./tareas.json","utf-8");
        let tareasParse = JSON.parse(tareasJson);
        return tareasParse
    },
    agregarTarea: function(titulo,estado){
        let nuevaTarea = {
            titulo: titulo,
            titulo: estado,
        }
        let tareasAnteriores = this.leerJson()

        let nuevoJson = JSON.s
    }
}

module.exports = funcionesDeTareas
/*
agregarTarea: function (titulo, estado) {
    let nuevaTarea = {
        titulo: titulo,
        estado: estado,
    }
    
    let tareasAnteriores = this.leerJson()
    
    tareasAnteriores.push(nuevaTarea)

    let nuevoJson = JSON.stringify(tareasAnteriores)
    fs.writeFileSync('./tareas.json', nuevoJson, 'utf-8')
    
}*/
/*const process = require('process');
const funcionesDeTareas = require('./funcionesDeTareas')
let action = process.argv[2] && process.argv[2].toLowerCase();

switch (action) {
    case "listar": 
        let listaDeTareas = funcionesDeTareas.leerJson()
        for (let i = 0; i < listaDeTareas.length; i++){
            console.log(`Tarea: ${listaDeTareas[i].titulo} \nEstado: ${listaDeTareas[i].estado}`)
            console.log("-----------------------------------------------------")
        };
        break
    case "agregar":
        let titulo = process.argv[3];
        let estado = process.argv[4];
        funcionesDeTareas.agregarTarea(titulo, estado)
        break
    case undefined:
        console.log("Atención tienes que pasar una acción");
        break
    default: 
        console.log("No entiendo que quieres hacer, ponete las pilas")    
}
*/