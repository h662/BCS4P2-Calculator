const CalculatorEnterButton = ({
  result,
  setResult,
  temp,
  setTemp,
  operator,
}) => {
  const onClickEnter = () => {
    if (!temp || !operator || result === "0" || isNaN(result)) {
      alert("숫자와 연산자를 입력해주세요.");
      return;
    }

    switch (operator) {
      case "+":
        setResult(String(Number(temp) + Number(result)));
        break;
      case "-":
        setResult(String(Number(temp) - Number(result)));
        break;
      case "*":
        setResult(String(Number(temp) * Number(result)));
        break;
      case "/":
        setResult(String(parseInt(Number(temp) / Number(result), 10)));
        break;
    }

    setTemp(0);
  };

  return (
    <button className="button-style bg-blue-600" onClick={onClickEnter}>
      Enter
    </button>
  );
};

export default CalculatorEnterButton;
