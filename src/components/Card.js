import React from 'react'
import About from './About'
import './Card.css'
import Info from './Info'

function Card() {
  return (
    <div className='card'>
        <Info />
        <About />
    </div>
  )
}

export default Card