import React,{ useState, useCallback} from 'react'

const Callbacks = () => {
    const [count, setCount ]=useState(0);

    const handleClick = useCallback(() => {
        console.log(`Button clicked. Count: ${count}`);
    }, [count]);



  return (
    <div>
        <button onClick={handleClick}>Click me</button>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
  };

  export default Callbacks;
