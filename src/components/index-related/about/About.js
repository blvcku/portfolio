import React from "react";
import ClientsIcon from '../../../images/clients.svg';
import ProjectsIcon from '../../../images/projects.svg';
import ExperienceIcon from '../../../images/experience.svg';
import BannerCard from "./BannerCard";
import { AboutContainer, BannerContainer, AboutContent, TechnologiesContainer } from "./About.styles";


const About = () => {
    return(
        <AboutContainer>
            <BannerContainer>
                <ul>
                    <BannerCard icon={ClientsIcon} content='clients' number={10} />
                    <BannerCard icon={ProjectsIcon} content='projects' number={11} />
                    <BannerCard icon={ExperienceIcon} content='years of experience' number={2} />
                </ul>
            </BannerContainer>
            <AboutContent>
                <h2>About me</h2>
                <p>I'am self-taught front-end developer currently located in Czestochowa, Poland. My native language is Polish, but I can use English during work. My coding journey started with C++ 6 years ago, for 3 years I was creating simple desktop applications and then I decided to move to web development. One of the main reasons why I moved to web development was that I wanted to make my work visible for more people.</p>
            </AboutContent>
            <TechnologiesContainer>
                <h2>Technologies</h2>
                <ul>
                    <li>React</li>
                    <li>Styled Components</li>
                    <li>Gatsby</li>
                    <li>GraphQL</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SCSS</li>
                    <li>Firebase</li>
                    <li>Contentful</li>
                </ul>
            </TechnologiesContainer>
        </AboutContainer>
    )
}

export default About;