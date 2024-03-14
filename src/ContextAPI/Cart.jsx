import React, { useContext } from "react";
import { CartContext } from "./Context/CartContext";

function Cart() {
  const cartdata = useContext(CartContext);

  return <div>{cartdata && cartdata.item.map((e) => <li>{e.name}</li>)}</div>;
}

export default Cart;
