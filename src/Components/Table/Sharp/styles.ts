import styled from "styled-components";

export const SharpStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 75px);

  @media screen and (max-width: 1220px) {
    grid-template-columns: repeat(2, 40px);
  }
`;
