import React from 'react'

export default function Navbar(props) {
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/*">TEXT_CONVERTER</a>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/*">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./logo.svg">About</a>
            </li>
            
            
          </ul>
          
          <div className='form-check form-switch text-light mx-2'>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
          </div>
        </div>
      </nav>
    </div>
  )
}
