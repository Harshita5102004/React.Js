import React, { useState, useEffect } from 'react';

function FunctionalLC() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('🔵 Component Mounted');

    return () => {
      console.log('🔴 Component Unmounted');
    };
  }, []);

  useEffect(() => {
    console.log(`🟡 Count updated: ${count}`);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default FunctionalLC;










// function Hello() {
//   useEffect(() => {
//     console.log('🌟 Component mounted!');

//     return () => {
//       console.log('❌ Component will unmount!');
//     };
//   }, []);

//   return <h2>Hello, I am mounted!</h2>;
// }

// function App() {
//   const [show, setShow] = useState(true);

//   return (
//     <div>
//       <button onClick={() => setShow(!show)}>
//         {show ? 'Hide' : 'Show'} Hello
//       </button>
//       {show && <Hello />}
//     </div>
//   );
// }

// export default App;
