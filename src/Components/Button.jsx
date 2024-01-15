import React from 'react'

function Button({ bgColor, children, px, py, onClick, shadowCol, onChange, saturation, z_index, bottom }) {
    return (
        <div>
            <button
                className={`bg-${bgColor} py-${py} px-${px} rounded shadow-sm shadow-${shadowCol} bg-${saturation} z-${z_index} bottom-${bottom} relative`}
                onClick={onClick}
                onChange={onChange}
            >
                {children}
            </button>
        </div>
    )
}

export default Button
