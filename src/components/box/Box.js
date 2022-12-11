import React from 'react'

function Box({title}) {
  const boxStyle={
    margin: '10px 10px',
    width: '100px',
    height:'100px',
    textAlign: 'center',
    display:"flex",
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'rgb(175, 171, 171)',
    color:'white'
  }
  return (
    <>
    <div style={boxStyle}>
      <div>Box #{title}</div></div>
    </>
  )
}

export default Box