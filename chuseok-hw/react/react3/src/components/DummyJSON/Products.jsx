// src/components/DummyJSON/Products.jsx
import { useEffect, useState } from "react";
import { productsAPI } from "../../api/products";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await productsAPI.getProducts();
      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <div className="p-2 m-2">
      <h2 className="text-2xl mb-4">Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="border-b-2 border-blue-300 p-2">
            <p className="text-xl font-bold">Product {product.id}</p>
            <p className="text-lg">
              {product.title} — ${product.price} ({product.rating}점)
            </p>
            <p>{product.description}</p>
            <p className="text-gray-500">{product.tags.map((tag) => `#${tag} `)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
