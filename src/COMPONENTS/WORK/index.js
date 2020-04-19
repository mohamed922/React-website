import React from 'react';
import {Home, Container ,HomeInfo ,HomeTitle ,HomeDesc ,SpanText ,HomeInformation ,HomeBtn} from './style'
const Work=()=> {
  return (
    <Home>
    <Container>
        <HomeInformation>
            <HomeTitle>Mohamed Magdy</HomeTitle>
            <HomeInfo>Front End Developer</HomeInfo>
            <HomeDesc>
                Iam a professional <SpanText>UI Designer</SpanText> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
            </HomeDesc>
            <HomeBtn>Let's Begin</HomeBtn>
        </HomeInformation>
    </Container>
</Home>

  );
}

export default Work;
