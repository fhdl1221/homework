import { useState } from "react";
import { cartsAPI } from "../../api/carts";
import CartListByUser from "./CartListByUser";

export default function CartSearchByUser() {
  const [userId, setUserId] = useState("");
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => setUserId(e.target.value);

  async function fetchData(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const carts = await cartsAPI.getCarts(userId);
      setCart(carts.length > 0 ? carts[0] : {});
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  const reset = () => {
    setUserId("");
    setCart({});
    setLoading(false);
    setError(null);
  };

  if (loading)
    return <div className="text-center text-lg font-bold mt-10">로딩중...</div>;
  if (error)
    return (
      <div className="text-center">
        <div className="mt-8 mb-4 text-lg text-red-600">
          에러가 발생했습니다.
        </div>
        <button
          onClick={reset}
          className="text-white bg-blue-500 px-4 py-2 mt-4"
        >
          돌아가기
        </button>
      </div>
    );

  return (
    <div>
      <form onSubmit={fetchData} className="flex w-full">
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={handleChange}
          className="p-2 ml-4 mt-2 mb-2 border-2 border-gray-50 w-full"
        />
        <button
          type="submit"
          className="px-4 py-2 mt-2 mb-2 mr-4 ml-2 text-white bg-blue-500 w-20"
        >
          검색
        </button>
      </form>

      {Object.keys(cart).length > 0 ? (
        <CartListByUser cart={cart} />
      ) : (
        <div className="text-center mt-10 text-red-600 text-lg">
          사용자의 카트가 존재하지 않습니다.
        </div>
      )}
    </div>
  );
}
