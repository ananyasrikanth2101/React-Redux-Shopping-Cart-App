import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeItemFromCart,
} from "../features/cart/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const totalQuantity = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const totalAmount = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="mt-4">
      <h2 className="cart">Cart</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart
            .filter((product) => product.quantity > 0)
            .map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td>
                  <button
                    className="btn btn-secondary"
                    onClick={() => dispatch(removeFromCart(product))}
                  >
                    <i className="fa fa-minus"></i>
                  </button>
                  {product.quantity}
                  <button
                    className="btn btn-secondary"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </td>
                <td>${product.price * product.quantity}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(removeItemFromCart(product))}
                  >
                    Remove from Cart
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="mt-3">
        <h3>Sub-total: ${totalAmount}</h3>
        <h3>Shipping: Free</h3>
        <h3>Total Amount: ${totalAmount}</h3>
      </div>
    </div>
  );
};

export default Cart;
