import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
 
const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          The name's Samridhi Bhardwaj. I am a tireless seeker of knowledge. My purpose is to make people's lives better and easier. I live in India. Thank you for visiting.
        </SectionText>
        <Button onClick={props.handleClick}> <a href="mailto:samridhiibhardwaj@gmail.com"> Contact Me </a></Button> 
      </LeftSection>
    </Section>
  </>
);

export default Hero;