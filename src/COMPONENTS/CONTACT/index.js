import React from 'react';
import {Contac,Container,ContactTitle,ContactTitleSpan,Form,FormInput,InputArea,
InputEmail,InputSub,InputSubmit,InputText} from './style'
const Contact  =()=> {
  return (
    <Contac>
    <Container>
        <ContactTitle><ContactTitleSpan>Drop </ContactTitleSpan>Me A line</ContactTitle>
        <Form>
            <FormInput>
                <InputText type="text" placeholder="Your Name"/>
                <InputEmail type ="email" placeholder="Your Email" />
            </FormInput>
            <InputSub type="text"  placeholder="Your Subject" />
            <InputArea cols="30" rows="10" placeholder="Your Message"></InputArea>
            <InputSubmit type="submit" value="Send Message" />
        </Form>
    </Container>
</Contac>

  );
}

export default Contact;
