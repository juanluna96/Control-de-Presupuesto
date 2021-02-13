import React, { useState } from 'react'
import Pregunta from './components/Pregunta'

function App() {
  // Definir el state
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);


  return (
    <div className="container mx-auto">
      <header>
        <h1 className="my-10 text-5xl text-center text-white">Gasto semanal</h1>
        <div className="py-5 mx-auto bg-white rounded shadow-md md:max-w-3xl">
          <Pregunta setPresupuesto={ setPresupuesto } setRestante={ setRestante }></Pregunta>
        </div>
      </header>
    </div>
  );
}

export default App;
