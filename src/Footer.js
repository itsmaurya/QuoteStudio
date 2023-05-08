import React from 'react'
import "./App.css"
import github from "./github.svg"
import linkedin from "./linkedin.svg"
const Footer = () => {
  return (
    
        <div className="footer">
            <img src={github} alt="github" />
           <a href="https://github.com/itsmaurya"> <h1>itsmaurya</h1></a>
           <img className='linkedin' src={linkedin} alt="linkdin" />
           <a href="https://www.linkedin.com/in/mauryaavi550"> <h1>Avinash Maurya</h1></a>
        </div>
    
  )
}

export default Footer