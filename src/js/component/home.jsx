import React, {useState} from "react";


const Home = () => {
  const [input, setInput] = useState(""); //para controlar el cambio del input
  const [tareas, setTareas] = useState([]); //para ir creando las tareas y meterlas en un array

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <ul>
        <li>
        
        <input
  type="text"
  onChange={(e) => setInput(e.target.value)} //cuando cambia el evento, lo almacena en setInput
  value={input} // le decimos que el valor del input es el mismo que recibe el input de e.target.value
  onKeyPress={(e) => {
    if (e.key === "Enter" && input.length >= 3) { //cuando se pulse tecla
      setTareas(tareas.concat(input));
      setInput(""); //si la tecla es pulsada es enter y el input es mayor de 3 de longitud, mete el valor de la misma en un array o "null" y vacía el input
    }
  }}
  placeholder="Add your to-do"
/>

        </li>
        {tareas.map((tarea, index) => ( //recorre el array de tareas para pintar cada una dentro de un li
          <li>
            <span>{tarea}</span> 
            <i
              className="fa-solid fa-xmark"
              onClick={() =>
                setTareas(
                  tareas.filter((tarea, currentIndex) => index != currentIndex)
                )
              } // mete el valor de la tarea en un li, añade el icono y al pulsar sobre él, se elimina la tarea pulsada con currentIndex

            ></i>
          </li>
        ))}
      </ul>

      <div>{tareas.length} tareas</div> 
    </div>
  );
};

export default Home;
