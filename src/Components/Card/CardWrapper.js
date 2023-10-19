import React from 'react'
import './CardWrapper.css'

const CardWrapper = (props) => {
  return (
    <div className='card'>
        {props.children}
    </div>
  )
}

export default CardWrapper