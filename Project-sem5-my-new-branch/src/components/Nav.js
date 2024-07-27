import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Nav() {
  return (
    <>
<div>
      <header>
        <nav className='nav'>
         <img  className='image1' src="https://lnmiit.ac.in/wp-content/uploads/2023/07/cropped-LNMIIT-Logo-Transperant-Background-e1699342125845.png" alt="cropped-LNMIIT-Logo-Transperant-Background.png" />
         <h1 className='s2'>The LNM Institute of Information Technology</h1>
            <ul className='s1'>
                <li> <a  className='anav'  href="/home">HOME</a></li>
                <li> <a  className='anav'  href="/help">HELP</a> </li>
                <li> <a className='anav'  href="/feedback">FEEDBACK</a> </li>
            </ul>
        </nav>
      </header>
      </div>

    </>
    
  )
}
