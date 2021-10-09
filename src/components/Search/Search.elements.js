import styled from 'styled-components'


export const Wrap = styled.div`
        margin-top: 100px;
        margin-left: 80px;
        width: 300px;
        position: absolute;
        z-index: 1;
        top: 580px;
        right: 80px;

        @media screen and (max-width:960px){
            top: 300px;
            right: 50px;
        }
        
        @media screen and (max-width:680px){
            width: 100vw;
            top: 250px;
            right: 0px;
        }
`;  

export const SearchInput = styled.div`
    display: flex;
`;

export const Input = styled.input`
    border-radius: ${({show}) => show ? '8px 0px 0px 0px' : '8px 0px 0px 8px' };
    border: none;
    background-color: black;
    color: rgba(255,255,255,0.8);
    font-size: 1rem;
    font-weight: 15px;
    outline: none;
    padding: 15px;
    box-sizing: border-box;
    width: 100%;
    height: 40px;

    ::placeholder{
        color: gray;
    }
`;
export const Icon = styled.div`
    cursor: pointer;
    border-radius: ${({show}) => show ? '0px 8px 0px 0px' : '0px 8px 8px 0px' };
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    width: 40px;
    height: 40px;
    background: black;
`;

export const WrapResult = styled.div`
    margin-top: 2px;
    width: 100%;
    background: black;
    display: ${({show}) => show ? 'flex' : 'none'};
    justify-content: flex-start;
    flex-direction: column;
    border-radius: 0 0 8px 8px;
    max-height: 200px;
    overflow-y: auto;

    ::-webkit-scrollbar {
        width: 6px;    
        border-radius: 5px;
    }
  
    ::-webkit-scrollbar-thumb {
        background: #888; 
        border-radius: 4px;
    }
`;

export const Result = styled.div`
    display: flex;
    align-items: center;
    padding: 15px;

    cursor: pointer;
    
    :hover{
        background: rgba(255,255,255,0.2);
    }
`;

export const Image = styled.div`
    border-radius: 5px;
    background-size: cover;
    background-position: center center;
    width: 100px;
    height: 70px;
    background: gray;
`;

export const Title = styled.p`
    width: 150px;
    color: white;
    align-self: flex-start;
    font-size: 1rem;
    margin-left: 15px;
    margin-top: 0px;
    text-align: left;
`;

export const View = styled.p`
    color: gray;
    align-self: flex-end;
    font-size: 0.8rem;
    margin-left: 0px;
`;