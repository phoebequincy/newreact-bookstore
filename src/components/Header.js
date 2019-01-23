import React, {Component} from 'react';

export default class Header extends Component {

  render(){

    const {handleSearch} = this.props

    return (
      <nav className="navbar navbar-dark bg-info">
        <a className="navbar-brand" href="/"></a>
          <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search Books" aria-label="Search" onChange={handleSearch}/>
          <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
          </form>
      </nav>
    );
  }
}
