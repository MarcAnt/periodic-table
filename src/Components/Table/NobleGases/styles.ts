import styled from "styled-components";

export const NobleGasesStyles = styled.div`
  display: grid;
  grid-template-columns: 70px;

  @media (max-width: 1259px) {
    grid-template-columns: 60px;
  }
  @media (max-width: 1080px) {
    grid-template-columns: 50px;
  }

  @media (max-width: 920px) {
    grid-template-columns: 30px;
  }

  @media (max-width: 550px) {
    grid-template-columns: 20px;
  }
  @media (max-width: 360px) {
    grid-template-columns: 15px;
  }
`;
