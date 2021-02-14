import React, { Fragment } from 'react'

const ControlPresupuesto = ({ presupuesto, restante }) => {
    return (
        <Fragment>
            <div className="max-w-2xl p-2 mx-auto my-3 bg-blue-200 rounded-sm">
                Presupuesto:  ${ presupuesto }
            </div>
            <div className="max-w-2xl px-2 mx-auto my-3 font-bold">
                Restante:  ${ restante }
            </div>
        </Fragment>
    )
}

export default ControlPresupuesto
