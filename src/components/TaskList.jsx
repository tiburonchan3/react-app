import React from 'react';

const TaskList = (props) => {
    //obtenemos los paramtros que se envian de componente padre ->CRUDBasic.jsx<-
    const {tasks} = props
    return (
        <div className="taskList">
        {/* iteramos el arreglo con la funcion map */}
            {tasks.map((task,index)=>{
                // se retornara un eleemnto por cada tarea que se encuentre almacebada 
                return (
                    <div className="list">
                      <div>
                          {/* como los indicen siempre inician en 0 se suma uno para que ahora el indice empieze en 1 
                          y asi susesivamente 
                          */}
                          <p><span>{index + 1}</span> - Tarea: <span>{task.taskName}</span></p>
                      </div>
                      <div>
                          <p>Autor: <span>{task.taskAutor}</span></p>
                      </div>
                    </div>
                )
            })}
        </div>
    );
}

export default TaskList;
