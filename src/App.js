import React, { useState } from 'react'
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import ControlPresupuesto from './components/ControlPresupuesto'

function App() {
  // Definir el state
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, setGastos] = useState([])

  // Cuando agreguemos un nuevo gasto
  const agregarNuevoGasto = (gasto) => {
    setGastos([
      ...gastos,
      gasto
    ])
  }

  return (
    <div className="container px-3 mx-auto md:px-0">
      <header>
        <h1 className="my-10 text-5xl text-center text-white">Gasto semanal</h1>
        <div className="py-5 mx-auto mb-3 bg-white rounded shadow-md md:max-w-3xl">
          { mostrarpregunta
            ?
            <Pregunta setPresupuesto={ setPresupuesto } setRestante={ setRestante } actualizarPregunta={ actualizarPregunta }></Pregunta>
            :
            <div className="flex-row p-3 mt-3 md:flex">
              <div className="md:w-1/2">
                <Formulario agregarNuevoGasto={ agregarNuevoGasto }></Formulario>
              </div>
              <div className="px-3 md:w-1/2">
                <Listado
                  gastos={ gastos }
                ></Listado>

                <ControlPresupuesto
                  presupuesto={ presupuesto }
                  restante={ restante }
                ></ControlPresupuesto>
              </div>
            </div>
          }
        </div>
      </header>
    </div>
  );
}

export default App;
