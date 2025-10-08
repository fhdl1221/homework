import React, { useState } from "react";
import Carts from "./DummyJSON/Carts";
import Products from "./DummyJSON/Products";
import Posts from "./DummyJSON/Posts";
import Quotes from "./DummyJSON/Quotes";

export default function Main() {
  const [selected, setSelected] = useState("carts");

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div>
      <select
        value={selected}
        onChange={handleChange}
        className="p-2 border-2 border-blue-200 m-2"
      >
        <option value="carts">Carts</option>
        <option value="products">Products</option>
        <option value="posts">Posts</option>
        <option value="quotes">Quotes</option>
      </select>

      {selected === "carts" && <Carts />}
      {selected === "products" && <Products />}
      {selected === "posts" && <Posts />}
      {selected === "quotes" && <Quotes />}
    </div>
  );
}
