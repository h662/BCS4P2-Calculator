const CalculatorNumButton = ({ result, setResult, number }) => {
  const onClickNumber = () => {
    if (result === "0") {
      setResult(String(number));
    } else {
      setResult(result + String(number));
    }
  };

  return (
    <button className="button-style" onClick={onClickNumber}>
      {number}
    </button>
  );
};

export default CalculatorNumButton;
