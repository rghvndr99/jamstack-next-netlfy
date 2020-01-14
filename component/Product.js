import Link from "next/link";
import "../css/component/product.scss";

const Product = (props) => {
 return (
      <div className="col-sm-4">
          <div className="card">
            <img src={props.product.image} className="card-img-top" alt="shirt"/>
            <div className="card-body">
              <h5 className="card-title">{props.product.name}</h5>
              <h6 className="card-title">$ {props.product.price}</h6>
              <Link href="/product/[id]" as={`/product/${props.product.id}`}>
                  <a className="view-product">View Item &rarr;</a>
              </Link>
            </div>
          </div>
      </div>
 );
}
export default Product;