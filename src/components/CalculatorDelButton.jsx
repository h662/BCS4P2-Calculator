const CalculatorDelButton = ({ result, setResult }) => {
  const onClickDel = () => {
    if (result === "0" || result.length === 1) {
      setResult("0");
    } else {
      setResult(result.substring(0, result.length - 1));
    }
  };

  return (
    <button className="button-style bg-red-600" onClick={onClickDel}>
      Del
    </button>
  );
};

export default CalculatorDelButton;
