import React from "react";

export default function CartItem({ product }) {
  return (
    <div className="cart-item p-4 mb-4 border-2 border-gray-100">
      <p className="mb-2">상품명(title): {product.title}</p>
      <p className="mb-2">가격(price): {product.price}</p>
      <p className="mb-2">수량(quantity): {product.quantity}</p>
      <p>총 가격(total
        ): {product.total}</p>
    </div>
  );
}
