import React from 'react'
import './App.css';



export default function Navbar() {
  return (
    <>
    <div className="navbar">
        <div className="logo">
            <h1>EDYODA</h1><br /><span id='story'>stories</span>
        </div>
            <h4>Explore Categories <span>&#11206;</span></h4>
            <div className="new">
              <p>EdYoda is free learning and knowledge
sharing platform for techies</p>
<button className="btnpress">Go To Main Website</button>
</div>
<div className="hamberger">
<div className="ham"></div>
<div className="ham"></div>
<div className="ham"></div>
</div>
    </div>
    </>
  )
}
