import { useEffect } from "react";
import { useState } from "react";
import RandomNumber from "./RandomNumber";
import Form from "./Form";

export default function Container() {
  const [randomNumber, setRandomNumber] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const [hint, setHint] = useState("");
  const [right, setRight] = useState(false);

  useEffect(() => {
    const number = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(number);
  }, []);

  function compareNumber(inputNumber) {
    if (inputNumber > randomNumber) {
      setHint("Down!");
    } else if (inputNumber < randomNumber) {
      setHint("Up!");
    } else {
      setHint("정답");
      setRight(true);
    }
    setAttempt(attempt + 1);
  }

  return (
    <div className="flex justify-center items-center mt-7">
      <div className="p-8 rounded-2xl shadow-lg text-center w-full max-w-md">
        <p className="font-bold text-3xl mb-8">랜덤 숫자 맞추기 게임</p>
        <p className="font-bold text-2xl mb-4">정답 숫자</p>

        <RandomNumber randomNumber={randomNumber} right={right} />

        <Form compareNumber={compareNumber} right={right} />

        <p
          className={`text-xl mb-4 ${
            right ? "text-green-600 font-semibold" : "text-black"
          }`}
        >
          {hint}
        </p>
        <p className="font-bold text-xl">시도 횟수: {attempt}</p>
      </div>
    </div>
  );
}
