import { useState, useEffect } from "react";
import { cartsAPI } from "../../api/carts";

export default function Carts() {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await cartsAPI.getCarts();
      setCarts(data);
    }
    fetchData();
  }, []);

  return (
    <div className="p-2 m-2">
      <h2 className="text-2xl mb-4">Carts</h2>
      {carts.map((cart) => (
        <div key={cart.id} className="border-b-2 border-blue-300 p-2">
          <p className="text-xl">Cart {cart.id}</p>
          <ul className="mb-2">
            {cart.products.map((p) => (
              <li key={p.id}>
                {p.title} - ${p.price}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
