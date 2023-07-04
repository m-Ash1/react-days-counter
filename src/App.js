import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  var date = new Date("july 1 2023");
  date.setDate(date.getDate() + count);

  function reset(){
    setCount(0)
    setStep(1)
  }

  return (
    <div>
      <div className="counters">
        <div>
          <input type="range" min="0" max="10" value={step} onChange={(e)=>setStep(+e.target.value)}/>
          Step: {step}
        </div>
        <div>
          <button onClick={() => setCount(count - step)}>-</button>
          <input type="text" value={count} onChange={(e)=>setCount(+e.target.value)}/>
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

      <button onClick={reset}>Reset</button>
    </div>
  );
}
