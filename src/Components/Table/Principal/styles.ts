import styled from "styled-components";

export const PrincipalStyles = styled.div`

    display: grid;
    grid-template-columns: repeat(5, 75px);
    grid-template-rows: repeat(6, 1fr);
    
    @media screen and (max-width: 1220px) {
       
       grid-template-columns: repeat(5, 40px);

   }
`; 