import React from 'react'

const Error = ({ mensaje }) => {
    return (
        <div className="max-w-2xl p-3 mx-auto my-3 font-bold text-white bg-red-500 rounded-xl">
            Error, <span className="lowercase">{ mensaje }</span>
        </div>
    )
}

export default Error
