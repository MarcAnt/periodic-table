import styled from "styled-components";

export const FundamentalStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 70px);
  grid-template-rows: repeat(2, 1fr);

  margin-top: 1rem;
  margin-left: 8.75rem;
  margin-bottom: 3rem;

  @media (max-width: 1259px) {
    grid-template-columns: repeat(16, 60px);
    margin-left: 7.5rem;
  }
  @media (max-width: 1080px) {
    grid-template-columns: repeat(16, 50px);
    margin-left: 6rem;
  }

  @media (max-width: 920px) {
    grid-template-columns: repeat(16, 30px);
    margin-left: 3.8rem;
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(16, 20px);
    margin-left: 2.5rem;
  }

  @media (max-width: 360px) {
    grid-template-columns: repeat(16, 15px);
    margin-left: 2rem;
  }
`;
