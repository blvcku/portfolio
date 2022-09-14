import React from "react";
import { HeaderContainer, ContentContainer } from "./Header.styles";
import SideSocialLinks from '../../utils/side-social-links/SideSocialLinks';

const Header = () => {
    return(
        <HeaderContainer>
            <ContentContainer>
                <h1>Piotr Orzechowski</h1>
                <h2>Front-end Developer</h2>
            </ContentContainer>
            <SideSocialLinks />
        </HeaderContainer>
    )
}

export default Header;