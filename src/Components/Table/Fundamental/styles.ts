import styled from "styled-components";

export const FundamentalStyles = styled.div`

    display: grid;
    grid-template-columns: repeat(16, 75px);
    grid-template-rows: repeat(2, 1fr);

    margin-top: 1rem;
    margin-left: 10rem;
    margin-bottom: 3rem;

    @media screen and (max-width: 1220px) {
       
        grid-template-columns: repeat(16, 40px);
        margin-left: 5rem;
    }
`; 