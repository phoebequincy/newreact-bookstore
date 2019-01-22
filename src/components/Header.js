import React from 'react';


const Header = (props) => {
console.log(props.title)
    return (
      <div className="Header">
      <nav className="navbar navbar-dark bg-info">
        <a className="navbar-brand" href="/">{props.title}</a>
      </nav>
   </div>
    );
  }


export default Header;
