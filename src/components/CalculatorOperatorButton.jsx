const CalculatorOperatorButton = ({
  inputOperator,
  setOperator,
  result,
  setResult,
  setTemp,
}) => {
  const onClickOperator = () => {
    if (isNaN(result) || result === 0) {
      alert("숫자를 입력해주세요.");
      return;
    }

    setOperator(inputOperator);
    setTemp(result);
    setResult("0");
  };

  return (
    <button className="button-style bg-red-600" onClick={onClickOperator}>
      {inputOperator}
    </button>
  );
};

export default CalculatorOperatorButton;
