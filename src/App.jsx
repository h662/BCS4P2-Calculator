import { useState } from "react";
import CalculatorInput from "./components/CalculatorInput";
import CalculatorDelButton from "./components/CalculatorDelButton";
import CalculatorNumButton from "./components/CalculatorNumButton";

const App = () => {
  const [result, setResult] = useState("0");

  return (
    <main className="bg-pink-200 min-h-screen flex justify-center items-center">
      <form
        onClick={(e) => e.preventDefault()}
        className="bg-gray-300 px-8 py-12 rounded-lg shadow-md"
      >
        <CalculatorInput result={result} setResult={setResult} />
        <div className="grid grid-cols-4 mt-8 gap-4">
          <CalculatorNumButton
            result={result}
            setResult={setResult}
            number={1}
          />
          <CalculatorNumButton
            result={result}
            setResult={setResult}
            number={2}
          />
          <CalculatorNumButton
            result={result}
            setResult={setResult}
            number={3}
          />
          <button className="button-style bg-pink-500">+</button>
          <CalculatorNumButton
            result={result}
            setResult={setResult}
            number={4}
          />
          <CalculatorNumButton
            result={result}
            setResult={setResult}
            number={5}
          />
          <CalculatorNumButton
            result={result}
            setResult={setResult}
            number={6}
          />
          <button className="button-style bg-blue-400">-</button>
          <CalculatorNumButton
            result={result}
            setResult={setResult}
            number={7}
          />
          <CalculatorNumButton
            result={result}
            setResult={setResult}
            number={8}
          />
          <CalculatorNumButton
            result={result}
            setResult={setResult}
            number={9}
          />
          <button className="button-style bg-red-400">×</button>
          <button className="button-style bg-blue-600">Enter</button>
          <CalculatorNumButton
            result={result}
            setResult={setResult}
            number={0}
          />
          <CalculatorDelButton result={result} setResult={setResult} />
          <button className="button-style bg-cyan-400">÷</button>
        </div>
      </form>
    </main>
  );
};

export default App;
