import React from 'react';
import './style.css';

function Button({buttonText, ...rest}) {
  return (
    <>
    <button className="primary-button"  {...rest}>{buttonText}</button>
    </>
  )
}

export default Button