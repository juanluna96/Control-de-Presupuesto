import React, { Fragment } from 'react';
import { revisarPresupuesto } from '../helpers'
import PropTypes from 'prop-types'


const ControlPresupuesto = ({ presupuesto, restante }) => {
    return (
        <Fragment>
            <div className="max-w-2xl p-2 mx-auto my-3 bg-blue-200 rounded-sm">
                Presupuesto:  ${ presupuesto }
            </div>
            <div className={ revisarPresupuesto(presupuesto, restante) }>
                Restante:  ${ restante }
            </div>
        </Fragment>
    )
}

ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}

export default ControlPresupuesto
