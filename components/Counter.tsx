"use client";
import React, { useState } from "react";

export default function Counter({
   dictionary,
}: {
   dictionary: {
      increment: string;
      decrement: string;
   };
}) {
   const [count, setCount] = useState(0);

   const decrement = () => setCount((prev) => prev - 1);
   const increment = () => setCount((prev) => prev + 1);
   return (
      <div className="flex items-stretch gap-3 text-lg">
         <button className="bg-red-600 px-6 rounded-sm text-white" onClick={decrement}>
            {dictionary.decrement}
         </button>
         <input
            onChange={(e) => setCount(Number(e.target.value))}
            className="border border-cyan-600 rounded-sm text-center py-0.5 w-[90px] tabular-nums"
            value={count}
            type="number"
         />
         <button className="bg-green-600 px-6 rounded-sm text-white" onClick={increment}>
            {dictionary.increment}
         </button>
      </div>
   );
}
