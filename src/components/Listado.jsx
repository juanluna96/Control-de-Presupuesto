import React from 'react'
import Gasto from './Gasto'
import PropTypes from 'prop-types'

const Listado = ({ gastos }) => {
    return (
        <div>
            <h2 className="mt-5 text-3xl italic font-bold text-center text-blue-500 md:mt-0 mb-9">Listado</h2>
            <div className="md:max-h-36 md:overflow-auto">
                { gastos.map(gasto => (
                    <Gasto key={ gasto.id } gasto={ gasto }></Gasto>
                )) }
            </div>
        </div>
    )
}

Listado.propTypes = {
    gastos: PropTypes.array.isRequired
}
export default Listado
