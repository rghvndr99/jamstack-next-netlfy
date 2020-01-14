import { useContext } from 'react';
import CartContext from '../component/CartContext';
import "../css/page/cart.scss";
    
    const Cart = () => {
       const { cart, carttotal } = useContext(CartContext);
       return(
         <div className="cart-item-container">
          <h3 className="cart-heading text-secondary">Cart Items</h3>
          <div className="pb-5">
            <div className="container">
              <div className="row">
                <div className="bg-white rounded shadow-sm mb-5 cart-item-wrap">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col" className="border-0 table-header">
                            <div className="p-2 px-3 text-uppercase text-secondary">Product</div>
                          </th>
                          <th scope="col" className="border-0 table-header">
                            <div className="py-2 text-uppercase text-secondary">Price</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map(item =>
                        <tr>
                          <th scope="row" className="border-0">
                            <div className="p-2">
                              <img src={item.image} alt="product" width="70" className="img-fluid rounded shadow-sm"/>
                              <div className="ml-3 d-inline-block align-middle">
                              <h5 className="mb-0"> <a href="#" className="d-inline-block align-middle text-secondary">{item.description}</a></h5>
                              </div>
                            </div>
                          </th>
                          <td className="border-0 align-middle text-secondary"><strong>$ {item.price}</strong></td>
                        </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                 <ul className="list-unstyled mb-4">
                    <li className="total-item-list d-flex justify-content-between py-3 border-bottom border-top"><strong className="text-muted">Total</strong>
                      <h5 className="font-weight-bold text-secondary">$ {carttotal}</h5>
                    </li>
                  </ul>
                  <a href="#" className="btn btn-dark rounded-pill py-2 btn-block proceed-to-checkout" >Procceed to checkout</a>
                </div>
              </div>
            </div>
          </div>
         </div>
       )
    }
    export default Cart;