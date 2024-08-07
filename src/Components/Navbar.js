import React,{useState} from 'react'
  import PropTypes from 'prop-types'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export default function Navbar(props) {
  
  return (
    <div >
       <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
      <div className={`container-fluid bg-${props.mode}`}>
    <a className={`navbar-brand text-${props.text}  bg-${props.mode}`}href="/" >{props.logo}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link active text-${props.text} bg-${props.mode}`}aria-current="page" to="/Home">{props.home}</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link text-${props.text} bg-${props.mode}`} to="/About" onClick={props.showAboutPage}>{props.About}</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link text-${props.text} bg-${props.mode}`} to="/Theam" onClick={props.changeTheamFun}>Theam</Link>
     </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className="form-check form-switch">
  <input className="form-check-input"  type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
  <label className={`form-check-label text-${props.text}`} htmlfor="flexSwitchCheckDefault" >{props.button}</label>
</div>
    </div>
    
  </div>
</nav>
    </div>
  )
}
Navbar.propTypes = { 
    logo:PropTypes.string
            }
Navbar.defaultProps = {
    logo:'TextUtils',
    home:'Home',
    About:'About'

}
