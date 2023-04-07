import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/hpage"><span><img src='https://logopond.com/logos/ec1ab766e91dae725febee6cfdcde86c.png' style={{height:"40px",width:"40px",marginRight:"5px"}}/></span>Learning Management System</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/ratecourseandtrainer">Rate a Course & Trainer</Link>
        </li>
        <li className='nav-item'>
          <Link to="/dashboard" className='nav-link'>Dashboard</Link>
        </li>
        <li className='nav-item'>
          <Link to="/trainer" className='nav-link'>Trainer Feedback Component</Link>
        </li>
        <li className='nav-item'>
          <Link to="/allfeedbacks" className='nav-link'>All Feedbacks</Link>
        </li>
        <li className='nav-item'>
          <Link to='/allcourses' className='nav-link'>All Courses</Link>
        </li>
        <li className='nav-item'>
          <Link to='/savecourse' className='nav-link'> Save Course</Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}
