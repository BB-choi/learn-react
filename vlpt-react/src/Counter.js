import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const onIncrease = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  const onDecrease = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}
