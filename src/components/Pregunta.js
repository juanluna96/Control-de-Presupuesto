import React, { Fragment } from 'react';

const Pregunta = () => {
    return (
        <Fragment>
            <h2 className="text-blue-600 text-center mb-4 text-3xl">Coloca tu presupuesto</h2>
            <form className="md:max-w-2xl px-3 md:p-0 mx-auto">
                <input type="number" name="" id="" placeholder="Coloca tu presupuesto" className="shadow-lg appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                <input type="submit" value="Definir presupuesto" className="bg-red-600 hover:bg-red-dark text-white font-bold py-3 px-8 rounded mt-5 mx-auto block" />
            </form>
        </Fragment>
    )
}

export default Pregunta
