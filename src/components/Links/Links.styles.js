import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin-top: 6px;
  width: 320px;
  justify-content: space-around;
  align-items: center;

  a {
    text-decoration: none;

    img {
      width: 34px;
    }

    span {
      font-family: "Gloria Hallelujah", cursive;
      font-style: italic;
      color: #fafafa;
      font-size: 24px;
    }
  }
`;
