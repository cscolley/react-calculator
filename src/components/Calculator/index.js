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
    // if current is "0" and "0" button is clicked do nothing
    if (current === "0") {
      if (e.target.value === "0") {
        return;
      }
      // else set current to "0"
      else {
        setCurrent(e.target.value);
      }
    }
    // if current is already 14 or over characters long display message
    else if (current.length >= 14) {
      setTotal("");
      setCurrent("TOO LONG");
    }
    // if too long message is already displayed do nothing
    else if (current === "TOO LONG") {
      return;
    }
    // append number clicked to current
    else {
      setCurrent(`${current}${e.target.value}`);
    }
  };

  const handleDecimalClick = () => {
    // if current already contains "." character do nothing
    if (current.includes(".")) {
      return;
    }
    // else append "." to current
    else {
      setCurrent(`${current}.`);
    }
  };

  const handleOperatorClick = (e) => {
    // if current ends with "+", "-", "*" or "/" operator
    if (/[+\-*/]$/.test(current)) {
      // if "-" operator button clicked and current doesn't end with "-" then concatenate "-" to current
      if (e.target.value === "-" && /[^-]$/.test(current)) {
        setCurrent(`${current}${e.target.value}`);
        return;
      }
      // else set current to operator clicked
      else {
        setCurrent(e.target.value);
        return;
      }
    }
    // else if current doesn't end with "+", "-", "*" or "/" operator but total is still default
    // empty string then set total to current and set current to operator button clicked
    else if (total === "") {
      setTotal(current);
      setCurrent(e.target.value);
      return;
    }
    // else evaluate concatenated total and current expression
    else {
      // evaluate concatenated total and current expression
      // eslint-disable-next-line no-eval
      const result =
        Math.round(eval(`${total}${current}`) * 100000000000000) /
        100000000000000;
      // result has too many digits display appropriate message
      if (result >= 99999999999999) {
        setTotal("");
        setCurrent("TOO LONG");
      }
      // if result as a string has too many characters
      else if (result.toString().length > 14) {
        // count number of non-digits (i.e. "-" or "." characters)
        const nonDigitCount = (result.toString().match(/[^\d]/g) || []).length;
        // count number of trailing zeros if any
        const trailingZerosCount =
          -Math.floor(Math.log10(result)) > 0
            ? -Math.floor(Math.log10(result))
            : 0;
        // assign to a new variable, precise, result as a string with precison of
        // 14 minus nonDigitCount and trailingZerosCount so that it fits on screen
        const precise = Number.parseFloat(result).toPrecision(
          14 - nonDigitCount - trailingZerosCount
        );
        // set total to precise
        setTotal(precise);
        // set current to operator clicked
        setCurrent(e.target.value);
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
    } 
    // if total is still default empty string do nothing 
    else if (total === "") {
      return;
    }
    // else evaluate concatenated total and current expression
    else {
      // evaluate concatenated total and current expression
      // eslint-disable-next-line no-eval
      const result =
        Math.round(eval(`${total}${current}`) * 100000000000000) /
        100000000000000;
      // if result is too large display appropriate message
      if (result >= 99999999999999) {
        setTotal("");
        setCurrent("TOO LONG");
      }
      // if result as a string has too many characters
      else if (result.toString().length > 14) {
        // count number of non-digits (i.e. "-" or "." characters)
        const nonDigitCount = (result.toString().match(/[^\d]/g) || []).length;
        // count number of trailing zeros if any
        const trailingZerosCount =
          -Math.floor(Math.log10(result)) > 0
            ? -Math.floor(Math.log10(result))
            : 0;
        // assign to a new variable, precise, the result as a string with precison of
        // 14 minus nonDigitCount minus trailingZerosCount so that it fits on screen
        const precise = Number.parseFloat(result).toPrecision(
          14 - nonDigitCount - trailingZerosCount
        );
        // set total to empty string
        setTotal("");
        // set current to precise
        setCurrent(precise);
      }
      // else set total to empty string and set current to precise
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
