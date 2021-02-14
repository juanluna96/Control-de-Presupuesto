import React from 'react'
import PropTypes from 'prop-types'

const Gasto = ({ gasto }) => {
    return (
        <li className="py-1 mb-1 list-none border-b border-gray-200 ">
            <p className="flex items-center content-center justify-between">
                { gasto.nombre }

                <span className="px-3 py-3 text-white bg-blue-800">$ { gasto.cantidad }</span>
            </p>
        </li>
    )
}

Gasto.propTypes = {
    gastos: PropTypes.object.isRequired
}

export default Gasto
