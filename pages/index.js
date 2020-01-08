import fetch from 'isomorphic-unfetch';
import Products from '../component/Products';

const Index = (props) => (
      <Products products={(props && props.products) || [] } />
)

Index.getInitialProps = async function() {
  const res = await fetch('https://my-json-server.typicode.com/mood-board/demo/products');
  const data = await res.json();
  return {
    products: data
  };
};
export default Index