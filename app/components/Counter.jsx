'use client'
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="flex justify-end items-center h-full">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4 text-white justify-start">Contador</h2>
        <p className="text-lg text-blue mb-4">El valor actual es: {count}</p>
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-2"
          onClick={increment}
        >
          Incrementar
        </button>
        <button 
          className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
          onClick={reset}
        >
          Resetear
        </button>
      </div>
    </div>
  );
};

export default Counter;
