import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem auto;
  max-width: 1300px;

  @media (max-width: 280px) {
    min-width: 280px;
  }
`;
