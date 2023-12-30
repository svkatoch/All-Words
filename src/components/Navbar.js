import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.hometitle}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.abouttitle}</a>
        </li>
      </ul>
      <form className="d-flex ms-auto form-inline my-2 my-lg-0">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes={
    title: PropTypes.string.isRequired, 
    abouttitle: PropTypes.string.isRequired,
}

Navbar.defaultProps={
    title: 'set title here',
    abouttitle: 'set about here'
}