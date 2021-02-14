import React from 'react'

const Formulario = () => {
    return (
        <form>
            <h2 className="mb-5 text-3xl italic font-bold text-center text-blue-500">Agrega tus datos aquí</h2>

            <label htmlFor="gasto" className="font-bold">Nombre gasto:</label>
            <input
                type="text"
                placeholder="Ej. transporte"
                id="gasto"
                className="w-full px-3 py-2 mt-2 mb-5 leading-tight text-gray-700 border rounded shadow-lg appearance-none focus:outline-none focus:shadow-outline"
            />

            <label htmlFor="cantidad_gasto" className="font-bold">Cantidad gasto:</label>
            <input
                type="number"
                placeholder="Ej. 300"
                id="cantidad_gasto"
                className="w-full px-3 py-2 mt-2 leading-tight text-gray-700 border rounded shadow-lg appearance-none focus:outline-none focus:shadow-outline"
            />

            <input type="submit" value="Agregar gasto" className="block w-full py-3 mx-auto mt-5 font-bold text-white bg-red-600 rounded hover:bg-red-dark" />
        </form>
    )
}

export default Formulario
