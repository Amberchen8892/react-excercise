import React from 'react'

function Typography({title}) {
    const typographyStyle= {
        color:'rgb(253, 145, 45)',
        textAlign: 'center',
        fontWeight:'bold'
    }
  return (
    <>
    <h1 style={typographyStyle}>{title}</h1>
    </>
  )
}

export default Typography
