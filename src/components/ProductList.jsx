import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, setProducts } from "../features/cart/cartSlice";
import productsData from "../data/products.json";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);

  useEffect(() => {
    dispatch(setProducts(productsData.products));
  }, [dispatch]);

  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-4">
          <div className="card mb-4">
            <img
              src={product.images}
              className="card-img-top"
              alt={product.title}
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">
                <strong>${product.price}</strong>
              </p>
              <button
                className="btn btn-primary"
                onClick={() => dispatch(addToCart(product))}
              >
                <i className="fa fa-cart-plus"></i> Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
