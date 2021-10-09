import styled from 'styled-components'
import { FaMagento } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const hoverColor = 'red';
const backgroundColor = '#121211'
const btnColor = '#0467FB';

export const Nav = styled.nav`
  
    background: ${(backgroundColor)};
    height: 80px;
    margin: 0px;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
    transition-timing-function: ease-in;
    transition: all 0.5s;

    opacity: ${({ show }) => (show ? '0.8': '1')};
    opacity: ${({ click }) => (click ? '1': '0.8')};

`;


export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    
    z-index: 1;
    width: 100%;

    margin-right: auto;
    margin-left: auto;


    
`;

export const NavLogo = styled(Link)`
    
    letter-spacing: 2px;
    margin-left: 70px;
    color: red;
    font-weight: 150px;
    font-weight: bold;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items:center;

    
    @media screen and (max-width: 960px){
        margin-left: 50px;
    }
`;


export const NavIcon = styled(FaMagento)`
    margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
    display: none;
    

    @media screen and (max-width: 1024px){        
        display: block;
        position: absolute;
        top: 25px; right: 15px;       
        transition: all 0.3s ease-in;
        font-size: 1.8rem;
        cursor: pointer;
    }
`;
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 70px;
    
    

    @media screen and (max-width: 1024px){
        padding-top: 50px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 60px;
        left: ${({ click }) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.5s ease;
        background: ${(backgroundColor)};
    }
`;

export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;

    &:hover{
        border-bottom: 2px solid ${(hoverColor)};
    }

    @media screen and (max-width: 960px) {
        width: 100%;
        &:hover{
            border:none;
        }
    }
`

export const NavLinks = styled(Link)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    box-sizing: border-box;
    padding: 0.5rem 1rem;
    height: 100%;

    @media screen and (max-width: 960px){
        text-align: center;
        padding: 0px;
        width: 100%;
        display: table;

        &:hover{
            color: ${(hoverColor)};
            transition: all 0.3s ease;
        }
    }
`;

export const NavItemBtn = styled.li`
    
    @media screen and (max-width: 960px){
        display: flex;
        justify-content:center;
        align-items:center;
        width: 100%;
        height:120px;
    }
`;

export const NavBtnLink = styled(Link)`
    display: flex;
    align-self: center;
    justify-content: center;
    text-decoration: none;
    margin: 8px 16px;
    
    height: 60%;
    border: none;
    outline: none;
`

export const Button = styled.button`
    width: 100%;
    border-radius: 4px;
    background:  ${(btnColor)};
    white-space: nowrap;
    padding: ${({ big }) => big ? '12px 64px' : '10px 20px'};
    color: white;
    font-size: ${({ fontBig }) => fontBig ? '20px' : '16px'};
    outline: none;
    border:none; 
    cursor: pointer;
    

    &:hover{
        transition: all 0.3s ease-in-out;
        background: white;
        background: ${(hoverColor)}
    }
`