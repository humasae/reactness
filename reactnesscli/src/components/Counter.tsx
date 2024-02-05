// src/components/Counter.tsx
import React from 'react';
import { useState } from 'react';

const Counter: React.FC = () => {
  // useState returns an array with 2 items, the variable and a function than manages that variable an force the re-render of the DOM
  const [obj, setObj] = useState({
    num: 1
  })
  const handleClick = () => {
    // this doesn't work because inside 'set' function of useState makes strinct comparison
    // and if object, obj old is equal that obj new
    // ====> obj.num = obj.num + 1;
    // so we have to create a new object
    const newObj = { ...obj, num: obj.num +1 }
    setObj(newObj);
  };

  const [cont, setCont] = useState(0);
  const addByThree = () => {
    //this method only add 1 instead 3, because cont value is 0 in the 3 lines
    // cuando se pinta addByThree en el html, se coge un ámbito con todos los valores de useState, y el valor es 0
    // eso se evita, cambiando el valor por una función
    setCont(cont + 1); //cont value is 0
    setCont(cont + 1); //cont value is 0
    setCont(cont + 1); //cont value is 0
  }

  const addByThreeOk = () => {
    // ejecutando una función se le pasa como parámetro el valor que tenga ese contador en ese momento. 
    // A diferencia de en addByThree, que recoge el ámbito de ese momento
    setCont(cont => cont + 1);
    setCont(cont => cont + 1);
    setCont(cont => cont + 1);
  }

  return (
    <div>
      <div>
        <h1>Contador: {obj.num}</h1>
        <button onClick={handleClick}>Incrementar</button>
      </div>
      <div>
        <h1>Contador por 3: {cont}</h1>
        <button onClick={addByThree}>Incrementa 3 chufa</button>
      </div>

      <div>
        <h1>Contador por 3: {cont}</h1>
        <button onClick={addByThreeOk}>Incrementa 3 OK</button>
      </div>
    </div>
  );
};

export default Counter;