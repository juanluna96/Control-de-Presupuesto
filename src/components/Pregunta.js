import React, { Fragment, useState } from 'react';

const Pregunta = () => {
    // Definir el state

    const [cantidad, guardarCantidad] = useState(0);
    const [error, setError] = useState(false)

    // Funcion que lee el presupuesto
    const definirPresupuesto = e => {
        const valor_presupuesto = parseInt(e.target.value)
        guardarCantidad(valor_presupuesto);
    }

    // Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        // Validar
        if (cantidad < 1 || isNaN(cantidad)) {
            setError(true);
            return;
        }

        // Si se pasa la validacion
        setError(false);
    }

    return (
        <Fragment>
            <h2 className="mb-4 text-3xl text-center text-blue-600">Coloca tu presupuesto</h2>
            {error
                ? <div className="max-w-2xl p-3 mx-auto my-3 text-white bg-red-500 rounded-xl">Error, debes ingresar un presupuesto</div>
                : null }
            <form
                className="px-3 mx-auto md:max-w-2xl md:p-0"
                onSubmit={ agregarPresupuesto }>
                <input type="number"
                    placeholder="Coloca tu presupuesto"
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow-lg appearance-none focus:outline-none focus:shadow-outline"
                    onChange={ definirPresupuesto }
                />
                <input type="submit" value="Definir presupuesto" className="block px-8 py-3 mx-auto mt-5 font-bold text-white bg-red-600 rounded hover:bg-red-dark" />
            </form>
        </Fragment>
    )
}

export default Pregunta
