const readline = require('readline');

// 1. Crea la interfaz de lectura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

 let tareas = [{id:1,descripcion:"Dariel", estado:"[completada]"},
                {id:2,descripcion:"xd", estado:"[pendiente]"}
]

function mostrarTareas(){
    let TamañoArray = tareas.length
    for (let i = 0; i < TamañoArray; i++) {
        console.log("id:" + tareas[i].id +"-"+ " Descripcion: " + tareas[i].descripcion +" "+tareas[i].estado);
        
        if (i == TamañoArray - 1) {
            AdministradorT()
        }
    }
    
}

function agregarTareas(){
    rl.question('Escribe la tarea', (NuevaTarea) => {

         let TareaN = {id:tareas.length + 1 , descripcion: NuevaTarea, estado:"[pendiente]"};   
         tareas.push(TareaN)
         AdministradorT()
      
    });
    
}

function completarTarea(){
    rl.question('Escribe el id de la tarea que ya hiciste', (idTarea) => {

         tareas[idTarea-1].estado="[Completada]"
          console.log("id:" + tareas[idTarea-1].id +"-"+ " Descripcion: " + tareas[idTarea-1].descripcion +" "+tareas[idTarea-1].estado);
         AdministradorT()
      
    });
    
}

function eliminarTarea(){
    rl.question('Escribe el id de la tarea que quieres eliminar', (idTareaE) => {

          console.log("Tarea eliminada: "+"id:" + tareas[idTareaE-1].id +"-"+ " Descripcion: " + tareas[idTareaE-1].descripcion +" "+tareas[idTareaE-1].estado)
          tareas.splice(idTareaE-1)
          
         AdministradorT()
      
    });
    
}

function AdministradorT(params) {
    
 rl.question('¿Que quieres hacer? 1-Agregar Tarea. 2-Mostrar Tareas. 3-Completar Tareas. 4-Eliminar Tareas', (hacer) => {
   
   if (hacer == 1) {
       agregarTareas()
   } 

    else if (hacer == 2) {
       mostrarTareas()
   }

    else if (hacer == 3) {
       completarTarea()
   }
   
    else if (hacer == 4) {
       eliminarTarea()
   } else {
      console.log("Introduzca el numero de alguna de las opciones [vuelva a ejecutar el codigo]")
   }

    // Cierra la interfaz después de obtener la respuesta
   
  });  
}

AdministradorT()