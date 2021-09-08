import React from "react";
import { Wrapper } from "./Buttons.styles";

const Buttons = ({
  onClearClick,
  onOperatorClick,
  onNumberClick,
  onEqualsClick,
  onDecimalClick,
}) => {
  return (
    <Wrapper>
      <button id="clear" value="AC" onClick={onClearClick}>
        AC
      </button>
      <button id="divide" value="/" onClick={onOperatorClick}>
        /
      </button>
      <button id="multiply" value="*" onClick={onOperatorClick}>
        x
      </button>
      <button id="seven" value="7" onClick={onNumberClick}>
        7
      </button>
      <button id="eight" value="8" onClick={onNumberClick}>
        8
      </button>
      <button id="nine" value="9" onClick={onNumberClick}>
        9
      </button>
      <button id="subtract" value="-" onClick={onOperatorClick}>
        -
      </button>
      <button id="four" value="4" onClick={onNumberClick}>
        4
      </button>
      <button id="five" value="5" onClick={onNumberClick}>
        5
      </button>
      <button id="six" value="6" onClick={onNumberClick}>
        6
      </button>
      <button id="add" value="+" onClick={onOperatorClick}>
        +
      </button>
      <button id="one" value="1" onClick={onNumberClick}>
        1
      </button>
      <button id="two" value="2" onClick={onNumberClick}>
        2
      </button>
      <button id="three" value="3" onClick={onNumberClick}>
        3
      </button>
      <button id="equals" value="=" onClick={onEqualsClick}>
        =
      </button>
      <button id="zero" value="0" onClick={onNumberClick}>
        0
      </button>
      <button id="decimal" value="." onClick={onDecimalClick}>
        .
      </button>
    </Wrapper>
  );
};

export default Buttons;
