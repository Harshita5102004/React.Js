import { useState , useEffect } from 'react';

//Preserving state means that even after certain changes or actions, the data stays intact.
function PreservedComponent() {
 
    const savedCount = localStorage.getItem('count');
    const [count, setCount] = useState(savedCount ? parseInt(savedCount) : 0);
  
    //  localStorage   is a web api that allows you to store data in a web browser
    useEffect(() => {
      localStorage.setItem('count', count);
    }, [count]);
  
    return (
      <div>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <p>Clicked {count} times</p>
      </div>
    
  
  
    )}
export default PreservedComponent
