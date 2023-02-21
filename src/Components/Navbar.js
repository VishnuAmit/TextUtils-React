import React from 'react'
import '../App.css'

export default function Navbar(props) {
  const navStyle = {
    backgroundColor: props.mode === 'dark' ? '#20276c' : '#dea6e6',
    color: props.mode === 'dark' ? 'white' : '#000000'
  };
  return (
    <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode}`} style={navStyle}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#" style={{color: navStyle.color}}>{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#" style={{color: navStyle.color}}>Home</a>
                </li>
              </ul>
              <div class={`form-check form-switch text-${props.mode==='red-bg'?'dark':'red-bg'}`}>
                <input class="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
                <label class="form-check-label" for="flexSwitchCheckChecked" style={{color: navStyle.color}}>Enable Dark Mode</label>
              </div>
            </div>
          </div>
        </nav>
      {/* </nav> */}
    </>
  )
}
