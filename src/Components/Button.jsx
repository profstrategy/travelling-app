import React from 'react'

function Button({ bgColor, children, px, py, onClick, shadowCol, onChange, saturation, span }) {
    return (
        <div>
            <button
                className={`bg-${bgColor} py-${py} px-${px} rounded shadow-sm shadow-${shadowCol} bg-${saturation} col-${span}`}
                onClick={onClick}
                onChange={onChange}
            >
                {children}
            </button>
        </div>
    )
}

export default Button
