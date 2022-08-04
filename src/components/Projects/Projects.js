import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const projectsDemo = [{
  title: 'Clone do Spotify',
  description: 'Recriação da interface do Spotify do zero'
},{
title: 'Portifólio Profissional',
description: 'Criação do Portifólio para fins de exibição do meu trabalho como Desenvolvedor Front-End.' 
}];

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projetos</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source, visit}) =>  (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
          <HeaderThree title>{title}</HeaderThree> 
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stacks utilizadas</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
                ))}
            </TagList>
          </div>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;