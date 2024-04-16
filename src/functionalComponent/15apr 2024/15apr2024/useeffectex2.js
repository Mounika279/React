import { useEffect, useState } from "react";

const Example2 = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    //dom manipulation
    document.title=`Count ${count}`
  }, [count]);

  const incrementHandler = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h5>Current count :{count}</h5>
      <button onClick={incrementHandler}>Click to change count</button>
    </>
  );
};
export default Example2;
