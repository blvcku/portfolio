import React from "react";
import { HeaderContainer, ContentContainer } from "./Header.styles";
import CloseButton from "../../utils/buttons/CloseButton";
import SideSocialLinks from '../../utils/side-social-links/SideSocialLinks';

const Header = ({stack, title, img}) => {
    return(
        <HeaderContainer img={img}>
            <CloseButton to='/' aria-label='Go to main page' />
            <ContentContainer>
                <h1>{title}</h1>
                <h2>{stack}</h2>
            </ContentContainer>
            <SideSocialLinks />
        </HeaderContainer>
    )
}

export default Header;