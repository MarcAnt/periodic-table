import styled from "styled-components";

export const PrincipalStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 70px);
  grid-template-rows: repeat(6, 1fr);

  @media (max-width: 1259px) {
    grid-template-columns: repeat(5, 60px);
  }
  @media (max-width: 1080px) {
    grid-template-columns: repeat(5, 50px);
  }
  @media (max-width: 920px) {
    grid-template-columns: repeat(5, 30px);
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(5, 20px);
  }
  @media (max-width: 360px) {
    grid-template-columns: repeat(5, 15px);
  }
`;
