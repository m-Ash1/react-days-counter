import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  var date = new Date("july 1 2023");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div className="counters">
        <div>
          <button onClick={() => setStep((step) => step - 1)}>-</button>
          <span>Step: {step}</span>
          <button onClick={() => setStep((step) => step + 1)}>+</button>
        </div>
        <div>
          <button onClick={() => setCount(count - step)}>-</button>
          <span>Count: {count}</span>
          <button onClick={() => setCount(count + step)}>+</button>
        </div>
      </div>
      <h4 className="date">
        {count === 0
          ? "Today is "
          : count >= 1
          ? ` ${count} days from today is `
          : `${Math.abs(count)} days ago was `}
        {date.toDateString()}
      </h4>
    </div>
  );
}
