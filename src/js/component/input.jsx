import React, {useState} from "react";

const Input = ({addTarea}) => { //se le pasa como prop la funcion addtarea de home
  const [input, setInput] = useState(""); //para controlar el cambio del input

  return (

      <li>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)} //cuando cambia el evento, lo almacena en setInput
          value={input} // le decimos que el valor del input es el mismo que recibe el input de e.target.value
          onKeyDown={(e) => {
            if (e.key === "Enter" && input.length >= 3) {
              //cuando se pulse tecla
             addTarea(input) //llamamos a la funcion addtarea que está en home
              setInput(""); //si la tecla es pulsada es enter y el input es mayor de 3 de longitud, mete el valor de la misma en un array o "null" y vacía el input
            }
          }}
          placeholder="Add your to-do" 
        />
      </li>
    

  );
};

export default Input;
