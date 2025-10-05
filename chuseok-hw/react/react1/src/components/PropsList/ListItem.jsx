import React from "react";

export default function ListItem({ item, onClick }) {
  return (
    <div>
      <h2 className="font-bold mb-2">
        No. {item.id} {item.name}{" "}
        <button
          onClick={() => {
            onClick(item.name);
          }}
          className="border-1 border-blue-300 p-2"
        >
          클릭
        </button>
      </h2>
    </div>
  );
}
