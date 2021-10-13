import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
   
} from './Navbar.elements'

const Navbar = () => {

    const [click, setClick] = React.useState(false);
    const [show,setShow] = React.useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    const controlNavbar = () => {
        if(window.scrollY >= 100){
            setShow(true)
        }else{
            setShow(false);
        }
    }
    React.useEffect(() => {
        window.addEventListener('scroll', controlNavbar);           
        return (() => {
            window.removeEventListener('scroll', controlNavbar);
        })
    },[])


    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav click={click} show={show}>
                    <NavbarContainer>
                        <NavLogo to='/MyAnime'>
                            <p>ANIME</p>
                        </NavLogo>
                        <MobileIcon
                            onClick={handleClick}
                        >
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click= {click}>
                            <NavItem>
                                <NavLinks to='/MyAnime'>Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/MyAnime'>Service</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/MyAnime'>Product</NavLinks>
                            </NavItem>
                           
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>

    );
};

export default Navbar;