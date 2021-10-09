import styled from 'styled-components'


export const Container = styled.div`
    margin-bottom: 500px;
`;

export const Banner = styled.div`
    position: relative;
    background-position: center center;
    background-size: cover;
    height: 60vh;
    max-width: 100%;
    width: 100%;
    opacity: 0.2;
    z-index: -1;  
    animation: ${({isloading}) => isloading ? 'lazy 3s infinite' : ''};



    @keyframes lazy{
        0% {opacity: 0.2;}
        50% {opacity: 1;}
        100% {opacity: 0.2}
    }
`;

export const Header = styled.div`
    margin: auto;
    display: flex;
    width: 80%;
    margin-top: -60px;
    justify-content: center;

    @media screen and (max-width: 680px){
        flex-direction: column;
        
    }
   
`;

export const AvatarMovie = styled.div`
    border-radius: 5px;
    background-size: cover;
    background-position: center center;
    width: 200px;
    height: 300px;

    animation: ${({isloading}) => isloading ? 'lazy 3s infinite' : ''};



    @keyframes lazy{
        0% {opacity: 0.2;}
        50% {opacity: 1;}
        100% {opacity: 0.2}
    }
   
   @media screen and (max-width:680px){
        width: 150px;
        height: 200px;
        margin: auto;
   }
`;

export const Detail = styled.div`
    margin-left: 30px;
    display: flex;
    width: 80%;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 50px;
    
`;

export const Button = styled.button`
    font-size: 1rem;
    width: 150px;
    height: 40px;
    background-color: #000;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 8px;
    
    :hover{
        background-color: rgba(0,0,0,0.5);
    }

    @media screen and (max-width: 680px){
        margin: auto;
        margin-top: 20px;
        width: 200px;
    }
`;

export const Title = styled.p`
    color: white;
    font-size: 1.8rem;
    min-height: 0px;
    font-weight: 18px;

    @media screen and (max-width: 680px){  
       margin:  auto;
       margin-top: 20px;
    }
`;

export const Category = styled.p`
    font-size: 0.7rem;
    color: gray;
    font-weight: 12px;
`;

export const Description = styled.p`
    font-size: 1rem;
    color: gray;
    font-weight: 12px;
    text-align: justify;

    @media screen and (max-width: 680px){
        display:none;
    }
`;

export const WrapDisplayEpisode = styled.div`
    margin:auto;
    display: flex;
    width: 80%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    
    .display{
        display: block;
    }

    @media screen and (max-width:680px){
        display: block;
    }
`

export const DisplayEpisode = styled.div`
    box-sizing: border-box;
    color: white;
    padding: 20px;
    border-radius: 6px;
    background: #000;
    height: 60px;
    width: 100%;
    margin-bottom: 20px;
    cursor: pointer;

    :hover{
        background: rgba(0,0,0,0.4);
    }
`;

export const WrapEpisode = styled.div`
    float:left;
    width: 100%;
    cursor: pointer;
    min-height: 150px;
    box-sizing: border-box;
    border-radius: 7px;    
    display: none;
    transition: all 0.5 ease;
    padding: 5px;
    :hover{
        background: rgba(135,147,161,0.2);
    }

   
`;

export const AvatarEpisode = styled.div`
    margin-left: 30px;
    margin-top: 13px;
    float: left;
    border-radius: 8px;
    background-position: center center;
    background-size: cover;  
    max-width: 250px;
    width: 100%;
    min-height: 120px;

    @media screen and (max-width:680px){
        float:none;
        max-width : 80%;
    }
    
`;

export const TitleEpisode = styled.p`
    margin-left: 300px;
    font-size: 1.3rem;
    font-weight: 17px;
    color: white;

    
    @media screen and (max-width: 680px){
        font-size: 1rem;
        margin-left: 30px;
    }
`;

export const ViewEpisode = styled.div`
    margin-left: 300px;
    font-size: 0.8rem;
    font-weight: 13px;
    color: gray;

    @media screen and (max-width: 680px){
        font-size: 1rem;
        margin-left: 30px;
    }
`;