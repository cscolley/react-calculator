import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 320px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-template-areas:
    "clear clear divide multiply"
    "seven eight nine subtract"
    "four five six add"
    "one two three equals"
    "zero zero decimal equals";

  button {
    width: auto;
    height: 100%;
    font-size: 28px;
  }

  #clear {
    grid-area: clear;
  }

  #divide {
    grid-area: divide;
  }

  #multiply {
    grid-area: multiply;
  }

  #seven {
    grid-area: seven;
  }

  #eight {
    grid-area: eight;
  }

  #nine {
    grid-area: nine;
  }

  #subtract {
    grid-area: subtract;
  }

  #four {
    grid-area: four;
  }

  #five {
    grid-area: five;
  }

  #six {
    grid-area: six;
  }

  #add {
    grid-area: add;
  }

  #one {
    grid-area: one;
  }

  #two {
    grid-area: two;
  }

  #three {
    grid-area: three;
  }

  #equals {
    grid-area: equals;
  }

  #zero {
    grid-area: zero;
  }

  #decimal {
    grid-area: decimal;
  }
`;
