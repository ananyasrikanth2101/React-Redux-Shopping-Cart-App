import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "./features/cart/cartSlice";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./index.css";
import productsData from "./data/products.json";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(productsData.products));
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
