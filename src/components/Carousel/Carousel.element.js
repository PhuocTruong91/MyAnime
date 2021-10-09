import styled from "styled-components";


export const Wrap = styled.div`
    
    width: 90%;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 70px;

`;

export const Item = styled.div`
    max-width: 100%;
    height: 500px;
    border-radius: 8px;
    background-position: center center;
    background-size: cover;
    cursor: pointer;

    @media screen and (max-width: 900px){
        height: 200px;
        
    }
`;