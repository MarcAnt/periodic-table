import styled from "styled-components";

export const DiffuseStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 70px);
  grid-template-rows: repeat(4, 1fr);

  @media (max-width: 1259px) {
    grid-template-columns: repeat(10, 60px);
  }
  @media (max-width: 1080px) {
    grid-template-columns: repeat(10, 50px);
  }
  @media (max-width: 920px) {
    grid-template-columns: repeat(10, 30px);
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(10, 20px);
  }
  @media (max-width: 360px) {
    grid-template-columns: repeat(10, 15px);
  }
`;
