"use client";
import { useEffect, useState } from "react";
export default function Counter() {
  const [count, Setcount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      Setcount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <>
      <h1>this is Counter component</h1>
      <h1>Counting {count}</h1>
    </>
  );
}
