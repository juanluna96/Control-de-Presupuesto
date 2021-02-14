import React, { useState } from 'react'
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'

function App() {
  // Definir el state
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);


  return (
    <div className="container px-3 mx-auto md:px-0">
      <header>
        <h1 className="my-10 text-5xl text-center text-white">Gasto semanal</h1>
        <div className="py-5 mx-auto bg-white rounded shadow-md md:max-w-3xl">
          <Pregunta setPresupuesto={ setPresupuesto } setRestante={ setRestante }></Pregunta>
          <div className="flex-row p-3 mt-3 md:flex">
            <div className="md:w-1/2">
              <Formulario></Formulario>
            </div>
            <div className="md:w-1/2">
              2
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
