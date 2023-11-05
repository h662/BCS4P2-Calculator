const CalculatorEnterButton = ({ result, setResult, temp, setTemp }) => {
  const onClickEnter = () => {
    if (isNaN(result) || result === 0) {
      alert("숫자를 입력해주세요.");
      return;
    }

    if (!temp) {
      setTemp(Number(result));
      setResult(0);
    }
  };

  return (
    <button className="button-style bg-blue-600" onClick={onClickEnter}>
      Enter
    </button>
  );
};

export default CalculatorEnterButton;
