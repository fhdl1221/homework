import React from "react";

export default function RandomNumber({ randomNumber, right }) {
  return (
    <div>
      {right ? (
        <p className="font-bold text-4xl text-green-600">{randomNumber}</p>
      ) : (
        <p className="font-bold text-4xl text-blue-600">???</p>
      )}
    </div>
  );
}
