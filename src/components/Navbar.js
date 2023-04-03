import React from 'react'
import PropTypes from 'prop-types'
import image from "../scrabble.png"

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode==='light'?'light':'dark'}`}>
  <div className="container-fluid">
  <a class="navbar-brand" href="#">
      <img src={image} alt="Logo" width="30" class="d-inline-block align-text-top" />
      <b>{props.title}</b>
    </a>
      <div className="container1">
      <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Enable dark':'Enable light'}</label>
</div>
</div>
    </div>
</nav>
  )
}


Navbar.propTypes ={title: PropTypes.string,
                   About: PropTypes.string}

Navbar.defaultProps ={title:'set title here',
                      About:'about section'}    