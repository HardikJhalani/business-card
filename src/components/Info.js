import React from 'react'
import './Info.css'
import profile from '../images/profile.png'

function Info() {
  return (
    <div className='info'>
        <img src={profile} alt = 'myImage'/>
        <h3>Hardik Jhalani</h3>
        <h5>Frontend Developer</h5>
        <a href='https://hardik-jhalani.vercel.app/'>hardik.website</a>
        <div className='buttons'>
            <a href='#' className='email'>
                <i class="bi bi-envelope-fill"></i>
                <p>Email</p>
            </a>
            <a href='https://www.linkedin.com/in/hardik-jhalani/' className='link' target='_blank'>
                <i class="bi bi-linkedin"></i>
                <p>LinkedIn</p>
            </a>
        </div>
    </div>
  )
}

export default Info