import React from 'react'
import Pregunta from './components/Pregunta'

function App() {
  return (
    <div className="container mx-auto">
      <header>
        <h1 className="text-center my-10 text-white text-5xl">Gasto semanal</h1>
        <div className="bg-white md:max-w-3xl py-5 mx-auto rounded shadow-md">
          <Pregunta></Pregunta>
        </div>
      </header>
    </div>
  );
}

export default App;
