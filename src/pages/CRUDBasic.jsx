import React, { useState, useEffect } from "react";
import TaskList from "../components/TaskList";
import "./styles/basic-crud.scss";

const CRUDBasic = () => {
    //estado que seteara las tareas que el usuario ingrese
    //el valor iniciar de este estado es un objeto que inicializa dos valores con un string vacio -> "" <-
  const [task, setTask] = useState({
    taskName: "",
    taskAutor: "",
  });
 //este estado sirve para mandar los datos por medio de props al componenete hijo que se 
 //renderiza mas abajo
  const [existedTask, setExistedTask] = useState([]);
   //estado de tipo boleano[true,false] que se usa para refrescar los datos 
  const [refresh, setRefresh] = useState(false);
  //variable vacia que contendra momentaneamente las tareas
  let tasks;
  //esta funcion de react se va a ejecutar cuandos los componentes de renderizen
  //en pocas palabras cuando la aplicacion termine de cargar
  useEffect(() => {
      //seteamos el estado con los valores convertios a formato JSON que estan en el localStorage de el
      //navegador 
    setExistedTask(JSON.parse(localStorage.getItem("task")));
    //seteamos a false el estado que sirve para refrescar la aplicacion
    setRefresh(false);
    //el use state refrescara la aplicacion cuando el estado de refresh cambie eso lo podemos editar en el array
    //que le proporcionamos abajo -> [task,refresh]<- si uno de estos 2 estados cambia entonces el useState refresca 
    //el componente sin necesidad de recargar la pagina
  }, [task, refresh]);
  //funcion que setea los valores de el formulario a el estado task qur recibe el evento del elemento
  const onChange = (event) => {
      //se setea el valor de el nombre del objetivo con el valor correspondiente 
    setTask({ ...task, [event.target.name]: event.target.value });
  };
//evento submit del formulario que recibe el evento del elemento
  const onSubmit = (e) => {
//esto evitara que la pagina se refresque al hacer submit en el boton
    e.preventDefault();
    //valida que no esten vacios los datos
    if (task.taskName !== "" && task.taskAutor !== "") {
        //se valida que el localstorage este vacio sin tareas 
      if (localStorage.getItem("task") === null) {
          //si esta vacio la variable task se iguala a un array vacio
        tasks = [];
        //si no esta vacio 
      } else {
          //se iguala a los datos convertidos que estan en el localstorage
        tasks = JSON.parse(localStorage.getItem("task"));
      }
      //se agrega la nueva tarea que el usuario agrega
      tasks.push(task);
      //se agrega nuevamente al localstorage para que guarde la tarea
      localStorage.setItem("task", JSON.stringify(tasks));
     //el estado que se encarga de refrescar el compoenente cambia de false a true por lo cual se vuelven 
     //a obtener las nuevas tareas agregadas 
      setRefresh(true);
      //en caso de datos vacios
    }else{
        alert("Datos vacios")
    }
  };
  return (
    <div className="crud">
        {/* el formulario ejecuta las funciones onSubmit y onChange */}
      <form onSubmit={onSubmit} onChange={onChange}>
        <div className="group">
          <label>Tarea:</label>
          {/* el input tambien ejecuta la funcion on change */}
          <input
            onChange={onChange}
            name="taskName"
            type="text"
            value={task.taskName}
          />
        </div>
        <div className="group">
          <label>Autor:</label>
          <input
            onChange={onChange}
            name="taskAutor"
            type="text"
            value={task.taskAutor}
          />
        </div>
        <button type="submit">Guardar</button>
      </form>
      {/* se renderiza el componente que se encarga de mostrar la lista de tareas */}
      {/* a este le pasamos como parametro las tareas que se obtiene del estado existedTask 
        que se setean en el useState al finalizar la carga de la aplicacion
      */}
      <TaskList tasks={existedTask} />
    </div>
  );
};

export default CRUDBasic;
