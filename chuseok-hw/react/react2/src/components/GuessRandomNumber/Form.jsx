import React from "react";
import { useState } from "react";

export default function Form({ compareNumber, right }) {
  const [inputNumber, setInputNumber] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const num = Number(inputNumber);
    if (num >= 1 && num <= 100) {
      compareNumber(num);
    }
    setInputNumber("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="p-4">
        <input
          type="number"
          min={1}
          max={100}
          placeholder="1부터 100 사이의 숫자를 입력하세요"
          required
          value={inputNumber}
          onChange={(event) => setInputNumber(event.target.value)}
          className="w-full p-3 mb-4 border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className={`w-full p-3 rounded-xl font-bold text-white ${
            right ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
          }`}
          disabled={right}
        >
          제출
        </button>
      </form>
    </div>
  );
}
