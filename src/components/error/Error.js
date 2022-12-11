import React from 'react';
import './style.css'

function Error({content}) {
  return (
    <div className="flex">
        <div className="error-container">
            <p>{content}</p>
        </div>
    </div>
  )
}

export default Error
