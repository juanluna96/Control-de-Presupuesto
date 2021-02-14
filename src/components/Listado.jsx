import React from 'react'
import Gasto from './Gasto'

const Listado = ({ gastos }) => {
    return (
        <div>
            <h2 className="mt-5 text-3xl italic font-bold text-center text-blue-500 md:mt-0 mb-9">Listado</h2>
            <div className="md:h-56 md:overflow-auto">
                { gastos.map(gasto => (
                    <Gasto key={ gasto.id } gasto={ gasto }></Gasto>
                )) }
            </div>
        </div>
    )
}

export default Listado
