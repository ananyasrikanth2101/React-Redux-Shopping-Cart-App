import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeCart } from "./features/cart/cartSlice";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import productsData from "./data/products.json";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeCart(productsData.products));
  }, [dispatch]);

  return (
    <div className="container">
      <h1>React Redux Task</h1>
      <ProductList />
      <Cart />
    </div>
  );
};

export default App;
