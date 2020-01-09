import React from 'react';
import { useContext } from 'react';
import CartContext from './CartContext';

const Navbar = (props) => {
  const { cart } = useContext(CartContext);
  const mystyle = {
    "backgroundColor": "#333",
    "color":"#fff",
  };

  return (
    <nav className="navbar navbar-light bg-info">
      <h3><a className="text-light" href="/">Shopers stop</a></h3>
      <a href="/cart" style={mystyle} className="btn btn-outline-secondary my-2 my-sm-0">Cart {cart.length}</a>
    </nav>
  );
};
export default Navbar