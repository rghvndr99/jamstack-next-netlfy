import React from 'react';
import { useContext } from 'react';
import CartContext from './CartContext';

import "../css/component/nav.scss";

const Navbar = (props) => {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg bg-info">
      <a className="navbar-brand text-light" href="/">
        Shopers stop 
        
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="humberger-menu">
          <i className="fa fa-bars fa-2x"></i>
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Category
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Electronics
              </a>
              <a className="dropdown-item" href="#">
                Fashion
              </a>
              <a className="dropdown-item" href="#">
                Home & kitchen
              </a>
            </div>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Gift card <span class="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Charity
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">
              Sell on shoper
            </a>
          </li>
        </ul>
        <div className="cart-container">
          <a href="/cart" className="cart">
            <i className="fa fa-2x fa-shopping-cart"></i>
            <span className="cart-quantity">{cart.length}</span>
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar