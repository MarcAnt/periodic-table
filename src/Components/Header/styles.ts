import styled from "styled-components";

export const HeaderStyles = styled.div`
  color: whitesmoke;
  font-weight: bold;
  text-transform: uppercase;
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  a {
    color: whitesmoke;
    padding-left: 0.5rem;
    font-size: 0.8rem;
  }

  h1 {
    padding-top: 2rem;
  }

  span {
    color: whitesmoke;
  }

  span button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    margin: 0.5rem;
    color: whitesmoke;
    font-weight: 700;
  }
  a > svg {
    margin-top: 5px;
  }
`;
