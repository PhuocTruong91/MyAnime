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
                    <TitleInfoItem>About Us</TitleInfoItem>
                    <ItemLink to='./'>Test</ItemLink>
                    <ItemLink to='./'>Test</ItemLink>
                    <ItemLink to='./'>Test</ItemLink>
                </InfoItem>
                <InfoItem>
                    <TitleInfoItem>Contact</TitleInfoItem>
                    <ItemLink to='./'>Test</ItemLink>
                    <ItemLink to='./'>Test</ItemLink>
                    <ItemLink to='./'>Test</ItemLink>
                </InfoItem>
                <InfoItem>
                    <TitleInfoItem>About</TitleInfoItem>
                    <ItemLink to='./'>Test</ItemLink>
                    <ItemLink to='./'>Test</ItemLink>
                    <ItemLink to='./'>Test</ItemLink>
                </InfoItem>
            </InfoContainer>
            <p>CopyRight</p>
        </FooterContainer>
    );
};

export default Footer;