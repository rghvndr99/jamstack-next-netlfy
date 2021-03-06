import App from 'next/app'
import Layout from '../component/Layout.js'
import CartContext from '../component/CartContext';

export default class MyApp extends App {
 constructor(props){
    super(props);
    this.state = {
        cart : [],
        carttotal : 0
    }
    this.addToCart=this.addToCart.bind(this);
    this.calculateTotal=this.calculateTotal.bind(this);
 }
  

  componentDidMount = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const carttotal = JSON.parse(localStorage.getItem('total'));
    if (cart) {
      this.setState({
         cart,
         carttotal
      });
    }
  };

  addToCart = (product) => {
    this.setState({
        cart: [...this.state.cart, product]
    },()=>localStorage.setItem('cart', JSON.stringify(this.state.cart)));    
  }

  calculateTotal = (price) => { 
    this.setState({
      carttotal: this.state.carttotal + price
    },()=>localStorage.setItem('total', JSON.stringify(this.state.carttotal)));    
  }

  render () {
    const { Component, pageProps } = this.props;

    return (
      <CartContext.Provider value={{cart: this.state.cart, addToCart: this.addToCart, total: this.calculateTotal, carttotal: this.state.carttotal}}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartContext.Provider>
    )
  }
}