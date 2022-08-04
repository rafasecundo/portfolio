import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Rafael Secundo
      </SectionTitle>
      <SectionTitle>// Front-End Developer</SectionTitle>
      <SectionText>
         Com conhecimento em JavaScript, HTML, CSS e React, pretendo agregar em futuros projetos, agregando sempre ao usuário do produto com criatividade e minimalismo.
      </SectionText>
        <Button onClick={() => window.location = 'https://www.linkedin.com/in/rafael-secundo-591590220/'}> Meu Linkedin</Button>
    </LeftSection>
    </Section>
);

export default Hero;