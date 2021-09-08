import React, { useState } from "react";
import { Wrapper } from "./Calculator.styles";
import Display from "../Display";
import Buttons from "../Buttons";

const initialTotal = "67";
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
    } else if (current.length === 14) {
      setCurrent("TOO LONG");
    } else if (current === "TOO LONG") {
      return;
    } else {
      setCurrent(current.concat(e.target.value));
    }
  };

  return (
    <Wrapper>
      <Display total={total} current={current} />
      <Buttons
        onClearClick={handleClearClick}
        onNumberClick={handleNumberClick}
      />
    </Wrapper>
  );
};

export default Calculator;
