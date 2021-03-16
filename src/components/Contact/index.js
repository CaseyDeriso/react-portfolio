import React from "react";
import styled from "styled-components";

// Forms, inputs, buttons

const FormWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 300px;
  height: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
`;

const TextArea = styled.textarea`
  width: 300px;
  height: 200px;
  border: 1px soild #ccc;
  background-color: #fff;
`

const Button = styled.button`
  width: 300px;
  height: 35px;
  background-color: #5995ef;
  color: #fff;
  border-radius: 3px;
`;

// Text

const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  color: #4d4d4d;
  font-size: 2.2em;
`;




function Contact() {



  return(
    <FormWrapper>
    <Title>Contact Me</Title>
    <Form>
      <Input type="text" name="email" placeholder="Email" />
      <TextArea type="text" name="messgae" placeholder="Message" />
      <Button type="submit">Submit</Button>
    </Form>
  </FormWrapper>
  )
}

export default Contact;