import React from 'react';
import {Container,Creative,CreativeInfo,InfoDesc,InfoDescAnchore,InfoDir,InfoTitle,InfoTtitleSpan
} from'./style'
 const About=()=> {
  return (
    <Creative>
    <Container>
        <CreativeInfo>
            <InfoTitle><InfoTtitleSpan>This is</InfoTtitleSpan> Me</InfoTitle>
            <InfoDir>Front End Developer</InfoDir>
            <InfoDesc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <InfoDescAnchore href="#">explicabo</InfoDescAnchore> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
            </InfoDesc>
            <InfoDesc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
            </InfoDesc>
        </CreativeInfo>
    </Container>
</Creative>
  );
}

export default About;
