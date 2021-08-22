import styled from "styled-components";

export const SharpStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 70px);

  @media (max-width: 1259px) {
    grid-template-columns: repeat(2, 60px);
  }
  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, 50px);
  }

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, 30px);
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(2, 20px);
  }
  @media (max-width: 360px) {
    grid-template-columns: repeat(2, 15px);
  }
`;
