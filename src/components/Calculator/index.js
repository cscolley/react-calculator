import React, { useState } from "react";
import { Wrapper } from "./Calculator.styles";
import Display from "../Display";
import Buttons from "../Buttons";

const initialTotal = "";
const initialCurrent = "0";

const Calculator = () => {
  const [total, setTotal] = useState(initialTotal);
  const [current, setCurrent] = useState(initialCurrent);

  const handleClearClick = () => {
    setTotal(initialTotal);
    setCurrent(initialCurrent);
  };

  const handleNumberClick = (e) => {
    if (current === "0") {
      if (e.target.value === "0") {
        return;
      } else {
        setCurrent(e.target.value);
      }
    } else if (current.length >= 14) {
      setTotal("");
      setCurrent("TOO LONG");
    } else if (current === "TOO LONG") {
      return;
    } else {
      setCurrent(`${current}${e.target.value}`);
    }
  };

  const handleDecimalClick = () => {
    if (current.includes(".")) {
      return;
    } else {
      setCurrent(`${current}.`);
    }
  };

  const handleOperatorClick = (e) => {
    // if current ends with "+", "-", "*" or "/" operator
    if (/[+\-*/]$/.test(current)) {
      // if "-" operator button clicked and current doesn't end with "-" then concatenate "-" to current
      if (e.target.value === "-" && /[^-]$/.test(current)) {
        setCurrent(`${current}${e.target.value}`);
      }
      // else set current to operator clicked
      else {
        setCurrent(e.target.value);
      }
    }
    // else evaluate concatenated total and current expression
    else {
      // eslint-disable-next-line no-eval
      const result =
        Math.round(eval(`${total}${current}`) * 1000000000000) / 1000000000000;
      // result has too many digits display appropriate message
      if (result.toString().length > 14) {
        setTotal("");
        setCurrent("TOO LONG");
      }
      // else set set total to result and set current to operator clicked
      else {
        setTotal(result.toString());
        setCurrent(e.target.value);
      }
    }
  };

  const handleEqualsClick = () => {
    // if current ends with an operator do nothing
    if (/[+\-*/]$/.test(current)) {
      return;
    } else {
      // evaluate concatenated total and current expression
      // eslint-disable-next-line no-eval
      const result = Math.round(eval(`${total}${current}`) * 1000000000000) / 1000000000000;
      // result has too many digits display appropriate message
      if (result >= 999999999999999) {
        setTotal("");
        setCurrent("TOO LONG");
      } else if (result.toString().length > 14) {
        var nonDigitCount = (result.toString().match(/[^\d]/g) || []).length;
        var precise = Number.parseFloat(result).toPrecision(14 - nonDigitCount);
        setTotal("");
        setCurrent(precise);
      }
      // else set set total to result and set current to operator clicked
      else {
        setTotal("");
        setCurrent(result.toString());
      }
    }
  };

  return (
    <Wrapper>
      <Display total={total} current={current} />
      <Buttons
        onClearClick={handleClearClick}
        onNumberClick={handleNumberClick}
        onDecimalClick={handleDecimalClick}
        onOperatorClick={handleOperatorClick}
        onEqualsClick={handleEqualsClick}
      />
    </Wrapper>
  );
};

export default Calculator;
