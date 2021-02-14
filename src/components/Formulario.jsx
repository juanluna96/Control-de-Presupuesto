import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false)

    // Funcion para guardar el nombre del gasto
    const guardarNombre = (e) => {
        setNombre(e.target.value);
    }

    // Funcion para guardar la cantidad del gasto
    const guardarCantidad = (e) => {
        let cantidad_gasto = parseInt(e.target.value, 10);
        setCantidad(cantidad_gasto);
    }

    // Cuando el usuario agrega un gasto

    const agregarGasto = (e) => {
        e.preventDefault();

        //Validar
        if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
            setError(true);
            return;
        }

        setError(false);

        //Construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        console.log(gasto)

        // Pasar el gasto al componente principal

        // Resetear el form
    }

    return (
        <form onSubmit={ agregarGasto }>
            <h2 className="mb-5 text-3xl italic font-bold text-center text-blue-500">Agrega tus datos aquí</h2>

            {error ? <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto"></Error> : null }

            <label htmlFor="gasto" className="font-bold">Nombre gasto:</label>
            <input
                type="text"
                placeholder="Ej. transporte"
                id="gasto"
                className="w-full px-3 py-2 mt-2 mb-5 leading-tight text-gray-700 border rounded shadow-lg appearance-none focus:outline-none focus:shadow-outline"
                value={ nombre }
                onChange={ guardarNombre }
            />

            <label htmlFor="cantidad_gasto" className="font-bold">Cantidad gasto:</label>
            <input
                type="number"
                placeholder="Ej. 300"
                id="cantidad_gasto"
                className="w-full px-3 py-2 mt-2 leading-tight text-gray-700 border rounded shadow-lg appearance-none focus:outline-none focus:shadow-outline"
                value={ cantidad }
                onChange={ guardarCantidad }
            />

            <input type="submit" value="Agregar gasto" className="block w-full py-3 mx-auto mt-5 font-bold text-white bg-red-600 rounded hover:bg-red-dark" />
        </form>
    )
}

export default Formulario
