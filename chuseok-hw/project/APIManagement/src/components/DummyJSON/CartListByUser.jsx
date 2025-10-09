import React from "react";

import CartItem from "./CartItem";

export default function CartListByUser({ cart }) {
  if (!cart) return <div>카트 데이터가 없습니다.</div>;

  return (
    <div className="cart-list p-8">
      <div className="p-4 mb-4 border-2 border-blue-100 bg-blue-50">
        <h3 className="mb-2">사용자 식별자(userId): {cart.userId}</h3>
        <p className="mb-2">총합(total): {cart.total}</p>
        <p>총 상품 수량(totalQuantity): {cart.totalQuantity}</p>
      </div>

      {cart?.products?.length > 0 ? (
        cart.products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))
      ) : (
        <div className="text-center text-lg font-bold mt-10">
          상품이 없습니다.
        </div>
      )}
    </div>
  );
}
