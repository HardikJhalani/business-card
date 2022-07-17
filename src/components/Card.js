import React from 'react'
import About from './About'
import './Card.css'
import Info from './Info'
import Links from './Links'

function Card() {
  return (
    <div className='card'>
        <Info />
        <About />
        <Links />
    </div>
  )
}

export default Card