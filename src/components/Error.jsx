import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ mensaje }) => {
    return (
        <div className="max-w-2xl p-3 mx-auto my-3 font-bold text-white bg-red-500 rounded-xl">
            Error, <span className="lowercase">{ mensaje }</span>
        </div>
    )
}

Error.propTypes = {
    mensaje: PropTypes.string.isRequired,
}

export default Error
