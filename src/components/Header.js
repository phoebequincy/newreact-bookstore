import React from 'react';


const Header = (props) => {

    return (
      <nav className="navbar navbar-dark bg-info">
        <a className="navbar-brand" href="#"></a>
          <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search Books" aria-label="Search"/>
          <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
          </form>
      </nav>
    );
  }


export default Header;
