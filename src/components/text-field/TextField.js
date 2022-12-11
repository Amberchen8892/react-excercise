import React from 'react'

function TextField({...rest}) {
    const inputStyle={
        padding:'10px',
        border: '0.05px solid rgba(0,0,0,0.06)',
        boxShadow: '0 0 15px 4px rgba(0,0,0,0.06)',
        marginRight: '10px',
        borderRadius: '25px',
    }
  return (
    <>
    <input style={inputStyle} {...rest}/>
    </>
  )
}

export default TextField
