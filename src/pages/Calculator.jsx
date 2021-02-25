//se importa React por defecto y useState para poder usarlo
import React, { useState } from "react";
//se importan los estilos sass
import "./styles/calculator.scss";
const Calculator = () => {
  //useState sirve para definir estados
  //el useState cuenta con dos partes [variable,funcion que modifica la variable] esto se iguala
  //a useState y se le asigna un valor por defecto en este caso se asigna cero useState(0)<----
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);
  //Esta es una funcion de tipo de fecha
  //las funciones de tipo flecha se definen con una constante o una variable la cual se iguala a lo siguiente
  // (parametro) => {'aqui va toda la logica dentro de estas llaves'} siendo parametro lo que recibe esta funcion
  //los paramtros son opcionales dependiendo de lo que queramos hacer

  //en esta funcion se espera un valor numerico -> val <- este servira para determinar que operacion queremos realizar
  const obtainResult = (val) => {
    setResult(0)
    //esto se usa para evitar los errores por consola
    try {
      //se evalua que los numeros dentro del estado -> useState sean numeros y no letras o signos
      //esto se hace con la funcion isNan al ponerle el simbolo -> ! <- preguntamos lo contrario
      //en lenguaje normal esto seria numero1 no es numero? e igual con el numero2
      if (!isNaN(number1) && !isNaN(number2)) {
        //si el valor del parametro que recibe la funcion es 1
        if (val === 1) {
            //set Setea al valor al estado resultado 
            //como el valor que recibio la funcion fue 1
            ///entonces convierte el estado number1 y number2 a entero con la funcion parseInt
            //y el valor que setea al estado resultado -> useState es la suma de number 1 y number 2
          setResult(parseInt(number1) + parseInt(number2));
          //Siguiente evalucacion en este caso sera una resta
        } else if (val === 2) {
          setResult(parseInt(number1) - parseInt(number2));
          //siguiente evaluacion en este caso sera una division
        } else if (val === 3) {
          setResult(parseInt(number1) / parseInt(number2));
          //siguiente evaluacion en este caso sera una mumltiplicacion
        } else if (val === 4) {
          setResult(parseInt(number1) * parseInt(number2));
        }
        //esto sera en caso que de los estados number1 y number2 no sean numeros
      } else {
          //se muestra la siguiente alerta
        alert("esto no es un numero");
      }
      //en caso de exepciones 
    } catch (error) {
        //se muestra por consola el error
      console.log(error.message);
    }
  };
  return (
    <div className="calc">
      <div className="input-group">
        <input
        //cuando el input se modifique se seteara el valor que se escriba al estado number1
          onChange={(event) => setNumber1(event.target.value)}
          type="text"
          className="inputs"
          //el valor por defecto de este input es el estado inicial de number1
          value={number1}
        />
        <input
        //cuando el input se modifique se seteara el valor que se escriba al estado number2
          onChange={(event) => setNumber2(event.target.value)}
          type="text"
          className="inputs"
          //el valor por defecto de este input es el estado inicial de number2
          value={number2}
        />
      </div>
      <div className="buttons">
          {/* Al dar click en los botones se ejecutara la funcion que contiene las operaciones basicas 
          matematicas y se envia un numero que es el parametro que la funcion necesita para evaluar que 
          operacion realizar */}
        <button onClick={() => obtainResult(1)}>Suma</button>
        <button onClick={() => obtainResult(2)}>Resta</button>
        <button onClick={() => obtainResult(3)}>Division</button>
        <button onClick={() => obtainResult(4)}>Multiplicacion</button>
      </div>
      <p className="result">
          {/*Se muestra el resultado
            para mostrar variables en react se usan  -> {} <- y dentro el nombre de la variable
          */}
        Resultado <span>{result}</span>
      </p>
    </div>
  );
};
//esto se exporta por defecto para poder llamar este componente en otras paginas
export default Calculator;
