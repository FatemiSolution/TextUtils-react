import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
export default function Navbar(props) {
  return (
  <>
     <nav className={`navbar navbar-expand-lg  navbar-${props.Mode} bg-${props.Mode} `} > 
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">{props.title}</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">{props.about}</NavLink>
        </li>
      </ul>
      <button className="btn btn-primary mx-2 " onClick={()=>{props.toggleMode2('primary')}} type="submit"></button>
      <button className="btn btn-warning mx-2 " onClick={()=>{props.toggleMode2('warning')}} type="submit"></button>
      <button className="btn btn-danger mx-2 " onClick={()=>{props.toggleMode2('danger')}} type="submit"></button>
      <div className={`form-check form-switch text-${props.Mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={()=>{props.toggleMode()}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
    </div>
  </div>
</nav>
  </>
  )
}
Navbar.propTypes = {
   title: PropTypes.string.isRequired,
   about: PropTypes.string
}
Navbar.defaultProps = {
    title: 'set title here',
    about: 'About text here'
}