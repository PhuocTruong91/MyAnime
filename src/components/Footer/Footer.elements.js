import styled  from "styled-components"
import {Link} from 'react-router-dom'

export const FooterContainer = styled.div`
    max-width: 100%;
    min-height: 50vh;
    background: #000;
    padding-top: 20px ;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p{
        margin-top: 50px;
        color: white;
        font-size: 0.8rem;
    }

`;

export const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 50%;
    margin-top: 15px;

    @media screen and (max-width: 600px){
        width: 80%;
        
    }
`;

export const InfoItem = styled.div`
    color: gray;
    display: flex;
    flex-direction: column;
    justify-content: center;

    text-align: left;
    @media screen and (max-width: 600px){
        text-align: center;
        margin-top: 12px;
    }
`

export const TitleInfoItem = styled.h1`
    font-size: 1.2rem;
    margin: 0;
    color: rgba(255, 255, 255, 0.7)
`
export const ItemLink = styled.div`
    color: gray;
    text-decoration: none;
    margin-top: 5px;
   
    a{
        margin-right: 10px;
        color: gray;
    }
`;

export const Form = styled.form`
    width: 50%;
    margin-bottom: 20px;
`

export const WrapForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Input = styled.input`
    outline: none;
    max-width: 100%;
    width: 300px;
    height: 40px;
    border: none;
    border-radius: 5px;
    padding-left: 8px;
    font-size: 1.2rem;

    ::placeholder{
        color: rgba(0,0,0, 0.5);
        font-size: 1rem;
    }
`;

export const Button = styled.button`
    font-size: 1rem;
    width: 100px;
    height: 40px;
    background-color: #991A27;
    color: white;
    cursor: context-menu;
    border: none;
    border-radius: 8px;
    margin-left: 15px;
    

    :hover{
        background-color: #702F2C;
    }
`;
