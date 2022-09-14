import React, { useState, useEffect } from "react";
import useProjectsData from '../../../hooks/useProjectsData';
import { PortfolioContainer, HeadContainer, ProjectsContainer } from "./Portfolio.styles";
import Project from "./Project";
import NavButton from '../../utils/buttons/NavButton';

const Portfolio = () => {

    const projects = useProjectsData();
    const [activeCategory, setActiveCategory] = useState('apps');
    const [filteredProjects, setFilteredProjects] = useState([]);

    const handleChangeFilter = (e, category) => {
        e.preventDefault();
        setActiveCategory(category);
    }
    
    useEffect(() => {
        const filteredData = projects.filter(({frontmatter: { category }}) => category === activeCategory);
        setFilteredProjects(filteredData);
    }, [activeCategory, projects]);

    return(
        <PortfolioContainer>
            <HeadContainer>
                <h2>Portfolio</h2>
                <nav aria-label="portfolio projects navigation">
                    <NavButton active={activeCategory === 'apps'} onClick={e => handleChangeFilter(e, 'apps')} aria-label="Show created applications" type='button'>Apps</NavButton>
                    <NavButton active={activeCategory === 'websites'} onClick={e => handleChangeFilter(e, 'websites')} aria-label="Show created websites" type='button'>Websites</NavButton>
                    <NavButton active={activeCategory === 'other'} onClick={e => handleChangeFilter(e, 'other')} aria-label="Show other projects" type='button'>Other</NavButton>
                </nav>
            </HeadContainer>
            <ProjectsContainer>
                {filteredProjects.map(({frontmatter: { title, slug, thumb }}) => (
                    <Project key={title} slug={slug} title={title} thumb={thumb} />
                ))}
            </ProjectsContainer>
        </PortfolioContainer>
    )
}

export default Portfolio;