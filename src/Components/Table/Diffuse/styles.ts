import styled from "styled-components";

export const DiffuseStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 75px);
  grid-template-rows: repeat(4, 1fr);

  @media screen and (max-width: 1220px) {
    grid-template-columns: repeat(10, 40px);
  }
`;
