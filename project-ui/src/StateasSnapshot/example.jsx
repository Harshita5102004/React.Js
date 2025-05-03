import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setTimeout(() => {
      alert('You clicked ' + count + ' times');
    }, 2000);
    setCount(count + 1);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
export default Example;