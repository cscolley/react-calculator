import React from "react";
import { Wrapper, Total, Current } from "./Display.styles";

const Display = ({ total, current }) => {
  return (
    <Wrapper>
      <Total>{total}</Total>
      <Current id='display'>{current}</Current>
    </Wrapper>
  );
};

export default Display;
