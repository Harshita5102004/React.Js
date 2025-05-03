import React, { useState } from 'react';
// useState is a React Hook that lets you add state (i.e., data that changes over time) to a functional component.
function Counter() {
  const [count, setCount] = useState(0); 

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}




//useEffect is a React Hook that lets you perform side effects in your function components. Side effects are anything that happens outside the normal rendering process, like:Fetching data from an API 




import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // Cleanup function
    return () => clearInterval(interval);
  }, []); 

  return <h1>{seconds} seconds passed</h1>;
}
