import React from "react";
import styled from "styled-components";

// Forms, inputs, buttons

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 92vh;
  @media only screen and (max-width: 700px) {
    height: 90vh;
  }
`;

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
`;

const Button = styled.button`
  width: 300px;
  height: 35px;
  background-color: #5995ef;
  color: #fff;
  border-radius: 3px;
`;

const Title = styled.h1`
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  color: #4d4d4d;
  font-size: 2.2em;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Icon = styled.a`
  font-size: 4em;
  color: rgb(0, 0, 0);
  padding: 0.2em;
  text-decoration: none;
`;

function Contact() {
  return (
    <FormWrapper>
      <Title>Contact Me</Title>
      <ContactGrid>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <Icon
          href={"https://github.com/CaseyDeriso"}
          target="_blank"
          className="ri-github-fill"
        />
        <Icon
          href={"https://www.linkedin.com/in/casey-deriso-b789409b/"}
          target="_blank"
          className="ri-linkedin-box-fill"
        />
        <Icon
          href={"mailto:caseyderiso@gmail.com"}
          target="_blank"
          className="ri-mail-add-fill"
        />
      </ContactGrid>
      <Form onSubmit={(e) => {
        e.preventDefault();
        e.target.reset();
      }}>
        <Title>Email me directly</Title>
        <Input type="email" name="email" placeholder="Your Email" />
        <TextArea type="text" name="messgae" placeholder="Message" />
        <Button type="submit">Submit</Button>
      </Form>
    </FormWrapper>
  );
}

export default Contact;
