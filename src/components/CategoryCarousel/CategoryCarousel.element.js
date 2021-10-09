import styled from 'styled-components';


export const Wrap = styled.div`
    width: 90%;
    max-height: 500px;
    min-height: 200px;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 30px;
    
    @media  screen and (max-width: 680px) {
        
        margin-bottom: 0px;
   }
    
`;

export const WrapItem = styled.div`
    margin: 0 10px;
    cursor: pointer;
    text-decoration: none;
    @media  screen and (max-width: 680px) {
        margin: 0 2px;
   }
`;



export const Header = styled.p`
    font-size: 1.5rem;
    color: gray;
    padding-left: 9px;

`;

export const Item = styled.div`
    max-width: 100%;  
    height: 150px;
    border-radius: 8px;
    background-position: center center;
    background-size: cover;

    @media  screen and (max-width: 680px) {
        max-width: 100%;  
        height: 100px;
   }
    
`;

export const Episode = styled.div`
    padding-top: 10px;
    padding-left: 10px;
    box-sizing: border-box;
    background: linear-gradient(to bottom, black,rgba(0,0,0,0));
    word-wrap:break-word;
    max-width: 100%;
    border-radius: 5px 5px 0 0;
    color: white;
    font-size: 20px;
    text-align: left;
    font-weight: 12px;
    word-wrap: break-word;
    height: 50px;
    @media  screen and (max-width: 680px) {
     display:none;
   }
`;

export const ItemName = styled.p`
    font-size: 1rem;
    color: white;
    text-align: center;

   @media  screen and (max-width: 680px) {
     display:none;
     height: 40px;
   }
`