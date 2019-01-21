import React from 'react';


const Header = ({title}) => {

    return (
      <div className="Header">
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="/">{title}</a>
      </nav>
   </div>
    );
  }


export default Header;
