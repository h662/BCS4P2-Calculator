const CalculatorDelButton = ({ result, setResult }) => {
  const onClickDel = () => {
    if (result === "0" || result.length === 1) {
      setResult("0");
    } else {
      setResult(result.substring(0, result.length - 1));
    }
  };

  return (
    <button className="button-style" onClick={onClickDel}>
      Del
    </button>
  );
};

export default CalculatorDelButton;
