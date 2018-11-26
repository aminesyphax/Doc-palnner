import React, { Component } from 'react';
// import './header.css';

class Header extends Component {
  render() {
    return (
<div>
    <div className="company-logo">

       <img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"/>

    </div>

    <div className="header-right">

      <ul >
        <li>
          <a href="#" className="active">About us </a>
        </li>
        <li>
          <a href="#">Career</a>
        </li>
        <li className="dropdown">
          <a href="#">Departement <br/></a>
          <div className="dropdown-content">

            <ul className="ul">
              <li>
                <a href="#">Marketing & PR</a>
              </li>
              <li>
                <a href="#">Customer Sucesse & Sales</a>
              </li>
              <li>
                <a href="#">IT, Product, Design & UX</a>
              </li>
              <li>
                <a href="#">Finance & Administration</a>
              </li>
              <li>
                <a href="#">HR & more</a>
              </li>
            </ul>
            
          </div>

        </li>
        </ul>
    </div>
    </div>
    )
  }
}
export default Header;