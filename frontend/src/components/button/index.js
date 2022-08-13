import React from 'react'

const Button = ({ children, onClick, disabled = false, className = "" }) => {
    return (
        <button disabled={disabled} onClick={onClick} className={`bg-blue-500 hover:bg-blue-700 disabled:bg-blue-200 text-white font-bold py-2 px-4 rounded ${className}`}>
            {children}
        </button>
    )
}

export default Button