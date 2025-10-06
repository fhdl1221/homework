import { useState, useEffect } from "react";
import findMinOperations from "./../../utils/dfs";

export default function Container() {
  const [number, setNumber] = useState(1); // 현재 숫자
  const [targetNumber, setTargetNumber] = useState(-1); // 목표 숫자
  const [minCount, setMinCount] = useState(-1); // 최소 연산 횟수
  const [count, setCount] = useState(0); // 연산 시도 횟수
  const [gameStatus, setGameStatus] = useState("playing"); // 게임 상태

  // 목표 숫자(2~100) 랜덤 생성
  useEffect(() => {
    setTargetNumber(Math.floor(Math.random() * 99) + 2); // 2~100 범위
    setGameStatus("playing");
  }, []);

  // 목표 숫자를 위한 최소 연산 횟수 계산
  useEffect(() => {
    if (targetNumber > 0) {
      setMinCount(findMinOperations(targetNumber));
    }
  }, [targetNumber]);

  // 게임 상태 체크 및 게임 종료 처리
  useEffect(() => {
    // 성공
    if (number === targetNumber && count === minCount) {
      alert("성공");
      setGameStatus("stop");
    }
    // 시도 횟수 초과
    if (count > minCount) {
      alert("시도 횟수 초과");
      setGameStatus("stop");
    }
  }, [number, targetNumber, count, minCount]);

  const handleOperation = (op) => {
    setNumber((prev) => {
      if (op === "+1") return prev + 1;
      if (op === "-1") return prev - 1;
      if (op === "x2") return prev * 2;
    });
    setCount((prev) => prev + 1);
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md shadow border-2 border-gray-200 p-4 mt-10 text-center">
        <p className="text-3xl">현재 숫자</p>
        <div className="bg-yellow-100 border-2 border-yellow-300 font-bold text-4xl p-4 m-4">
          {number}
        </div>
        <div className="bg-blue-100 border-2 border-blue-300 p-4 m-4 text-xl">
          <p>
            목표 숫자:{" "}
            <span className="text-blue-500 font-bold">{targetNumber}</span>
          </p>
          <p>
            최소 시도 횟수:{" "}
            <span className="text-green-500 font-bold">{minCount}</span>
          </p>
          <p>
            현재 시도 횟수:{" "}
            <span className="text-red-500 font-bold">{count}</span>
          </p>
        </div>
        <div className="bg-gray-50 border-2 border-gray-300 p-4 m-4">
          <button
            className="bg-green-400 py-3 px-5 m-2 text-white text-2xl"
            onClick={() => handleOperation("+1")}
          >
            +1
          </button>
          <button
            className="bg-red-400 py-3 px-5 m-2 text-white text-2xl"
            onClick={() => handleOperation("-1")}
          >
            -1
          </button>
          <button
            className="bg-purple-400 py-3 px-5 m-2 text-white text-2xl"
            onClick={() => handleOperation("x2")}
          >
            x2
          </button>
        </div>
      </div>
    </div>
  );
}
