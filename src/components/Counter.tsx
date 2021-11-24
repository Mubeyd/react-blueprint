import { createStateHook } from "../simpleStateManager/simpleStateManager";

const useCounter = createStateHook(0);

export const Counter = () => {
  const [count, setCount] = useCounter();
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add one</button>
      <div>Count: {count}</div>
    </div>
  );
};