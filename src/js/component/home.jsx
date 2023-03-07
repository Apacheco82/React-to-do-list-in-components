import React, {useState} from "react";
import Input from "./input.jsx";
import Tareas from "./tareas.jsx";
import TareasCheck from "./tareasCheck.jsx";

const Home = () => {
  //const [input, setInput] = useState(""); //para controlar el cambio del input
  const [tareas, setTareas] = useState([]); //para ir creando las tareas y meterlas en un array
  const [tareasCheck, setTareasCheck] = useState([]);

  const addTarea = (tarea) => {
    //se crea aqui la funcion para añadir la tarea y usarla en el componente
    //setTareas([...tareas, tarea]); //se copia la tarea y se añade una nueva
    setTareas([...tareas, tarea]);
    // console.log(tareas)
  };
  const deleteTarea = (index) => {
    const newTareas = [...tareas];
    newTareas.splice(index, 1);
    setTareas(newTareas);
  };
  const checkTarea = (tareaCheck, index) => {
    setTareasCheck([...tareasCheck, tareaCheck]);
    deleteTarea(index);
  };

  return (
    <>
      <div className="container">
        <h1>To-Do List</h1>
        <ul>
          <Input addTarea={addTarea} />
          {tareas.map((tarea, index) => (
            <Tareas
              key={index}
              tarea={tarea}
              index={index}
              deleteTarea={() => deleteTarea(index)}
              checkTarea={() => checkTarea(tarea, index)}
            />
          ))}
        </ul>
      </div>
      <div className="container">
        <h1>Completadas</h1>
        <ul>
          {" "}
          {tareasCheck.map((hecho) => (
            <TareasCheck hecho={hecho} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
