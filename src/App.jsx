import { useEffect, useState } from "react";
import CalculatorInput from "./components/CalculatorInput";
import CalculatorDelButton from "./components/CalculatorDelButton";
import CalculatorNumButton from "./components/CalculatorNumButton";
import CalculatorEnterButton from "./components/CalculatorEnterButton";
import CalculatorOperatorButton from "./components/CalculatorOperatorButton";

const App = () => {
  const [result, setResult] = useState("0");
  const [temp, setTemp] = useState(0);
  const [operator, setOperator] = useState();

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
          <CalculatorOperatorButton
            inputOperator={"+"}
            setOperator={setOperator}
            result={result}
            setResult={setResult}
            setTemp={setTemp}
            color="bg-pink-500"
          />
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
          <CalculatorOperatorButton
            inputOperator={"-"}
            setOperator={setOperator}
            result={result}
            setResult={setResult}
            setTemp={setTemp}
            color="bg-blue-500"
          />
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
          <CalculatorOperatorButton
            inputOperator={"*"}
            setOperator={setOperator}
            result={result}
            setResult={setResult}
            setTemp={setTemp}
            color="bg-red-400"
          />
          <CalculatorEnterButton
            result={result}
            setResult={setResult}
            temp={temp}
            setTemp={setTemp}
            operator={operator}
          />
          <CalculatorNumButton
            result={result}
            setResult={setResult}
            number={0}
          />
          <CalculatorDelButton result={result} setResult={setResult} />
          <CalculatorOperatorButton
            inputOperator={"/"}
            setOperator={setOperator}
            result={result}
            setResult={setResult}
            setTemp={setTemp}
            color="bg-cyan-500"
          />
        </div>
      </form>
    </main>
  );
};

export default App;
