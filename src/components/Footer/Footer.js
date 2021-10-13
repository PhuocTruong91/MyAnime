import React from 'react';
import {
    FooterContainer,
    InfoContainer,
    InfoItem,
    TitleInfoItem,
    ItemLink,
    Form,
    Input,
    Button, WrapForm
} from './Footer.elements'
import { FaFacebook, FaInstagram, FaPhoneAlt } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'

const Footer = (e) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        return false;
    }

    return (
        <FooterContainer>
            <Form onSubmit={handleSubmit}>
                <WrapForm>
                    <Input placeholder="Your email"></Input>
                    <Button type="submit">Subscribe</Button>
                </WrapForm>
            </Form>
            <InfoContainer>
                <InfoItem>
                    <TitleInfoItem>About Me</TitleInfoItem>
                    <ItemLink to='./anime'>Huỳnh Phước Trường</ItemLink>
                    <ItemLink to='./anime'>09/01/2000</ItemLink>
                </InfoItem>
                <InfoItem>
                    <TitleInfoItem>Contact</TitleInfoItem>
                    <ItemLink to='./anime'>0934802184</ItemLink>
                    <ItemLink to='./anime'>phuoctruong554@gmail.com</ItemLink>
                </InfoItem>
                <InfoItem>
                    <TitleInfoItem>Social Network</TitleInfoItem>
                    <ItemLink to='./anime'>
                        <a target="_blank" href='https://www.facebook.com/P.T.H.9100/'><FaFacebook size={23}></FaFacebook></a>
                        <a target="_blank" href='https://www.instagram.com/phc.trng/'><FaInstagram size={23}></FaInstagram></a>
                        <a target="_blank" href="mailto:someone@yoursite.com"><GrMail size={23}></GrMail></a>
                    </ItemLink>
                </InfoItem>
            </InfoContainer>
        </FooterContainer>
    );
};

export default Footer;