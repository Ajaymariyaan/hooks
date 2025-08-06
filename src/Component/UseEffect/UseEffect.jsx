import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(1);

  // Run this effect every time count changes
  useEffect(() => {
    console.log(`Count changedd ${count+5}`);
  },[count]);
  

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;
