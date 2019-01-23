import React from 'react';



const Header = ({handleSearch}) => {

  return(
    <header>
      <nav className="navbar fixed-top navbar-dark bg-info">
        <a className="navbar-brand" href="/">Book Store</a>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch} />
        </form>
      </nav>
    </header>
  )
}

export default Header
