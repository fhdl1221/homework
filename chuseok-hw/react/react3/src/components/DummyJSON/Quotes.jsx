import React, { useEffect, useState } from "react";
import { quotesAPI } from "../../api/quotes";

export default function Quotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await quotesAPI.getQuotes();
      setQuotes(data);
    }
    fetchData();
  }, []);
  return (
    <div className="p-2 m-2">
      <h2 className="text-2xl mb-4">Quotes</h2>
      <ul>
        {quotes.map((quote) => {
          return (
            <li key={quote.id} className="border-b-2 border-blue-300 p-2">
              <p className="font-bold mb-2">Quote {quote.id}</p>
              <p className="text-lg">
                {quote.author} - {quote.quote}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
