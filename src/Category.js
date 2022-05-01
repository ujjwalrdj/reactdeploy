import React from 'react'
import './App.css';

export default function Category() {
  return (
  <>
   <div className="container">
  <h2 className='heading'>Latest Posts</h2>
  <h5 className='filter'><i class="fa fa-filter"></i>Filter by Category</h5>
  </div>
  <div className="buttons">
      <button className="btn active">All</button>
      <button className="btn">Artificial intelligence</button>
      <button className="btn">Cloud Computing</button>
      <button className="btn">DevOps</button>
      <button className="btn">Programming Languages</button>
      <button className="btn">Mobile Application Development</button>
      <button className="btn">Technology and Tools</button>
      <button className="btn">Get a Job in Tech Company</button>
      <button className="btn">others</button>
  </div>
  </>
  )
}
