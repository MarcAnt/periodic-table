import styled from "styled-components";


export const InfoWrapper = styled.div`
    position: absolute;
    display: flex;
    width: 40%;
    top: 25px;
    left: 25%;
    transform: translateY(11rem);

    @media screen and (max-width: 1221px) {
        left: 30%;
        top: 25px;
        width: 50%;
    }
`;

export const SelectBox = styled.div`
    width: 100%;
    margin-left: 1rem;

    @media screen and (max-width: 1220px) {
        order: -1;
        margin: 0;
        width: 50%;
        padding-right: .5rem;
    }
`;

export const InfoElementStyles = styled.div`

    width: 100%;
    background-color: whitesmoke;
    display: flex;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 1px 2px 10px black;

    .info-element {
        width: 50%;
        button {
            width: 100%;
            height: 100%;
            padding: 1rem;

            p {
                font-size: 1.2rem;
            }
            
            h1 {
                font-size: 3rem;
            }
            
            small {
                
                font-size: 1rem;
            }
        }
    }

    .info-card {
        padding: 1rem;
    }

    
    @media screen and (max-width: 1220px) {
        display: none;
       
    }

`