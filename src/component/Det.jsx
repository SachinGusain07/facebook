import React from 'react'

import './Det.css'

import "./Det.css"

function Det() {
  return (
    <div className='conatiner Det_conatiner'>
      <section>
       
      <form action ="#">
      <h1 className='log'>Log in to Facebook</h1>
       
        <div className='text'>
 <input type ="text"  className="light" placeholder="MObile number or Email address"required></input>
 <input type ="password" className="light"  placeholder="password" required></input></div>
 <div className='go'>
 <button type='submit' className='btn'>Log in</button>
 <a href='#nowhere'>Forgotten account?</a>
 </div>


</form>
 </section>
    </div>
  )
}

export default Det
