import React from "react";
import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="Logo" />
        </a>
        <div>
          <Join>Join Now</Join>
          <SignIn>Sign In</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
        </Hero>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 0;
  /* border: 2px solid red; */
`;

const Nav = styled.nav`
  /* border: 1px solid green; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  max-width: 1128px;
  margin: auto;
  padding: 12px 10px 16px;
  position: relative;

  & > a {
    width: 135px;
    height: 34px;

    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  /* border: 1px solid violet; */
  border-radius: 2px;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  font-size: 16px;
  /* font-weight: 550; */
  padding: 10px 12px;
  margin: 0 12px 0 0;
  text-decoration: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.9);
  }
`;

const SignIn = styled.a`
  background-color: transparent;
  border-radius: 24px;
  box-shadow: inset 0 0 0 2px #0a66c2;
  color: #0a66c2;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin: 0;
  padding: 10px 20px;
  text-decoration: none;
  text-align: center;
  transition-duration: 167ms;

  &:hover {
    background-color: rgba(112, 181, 249, 0.1);
  }
`;

const Section = styled.section`
  /* border: 1px solid red; */
  display: flex;
  align-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  min-height: 700px;
  margin: 0;
  max-width: 1128px;
  padding: 100px 0 160px;
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;

  h1 {
    color: #2977c9;
    font-size: 56px;
    font-weight: 300;
    line-height: 70px;
    padding-bottom: 0;
    width: 55%;

    @media (max-width: 768px) {
      font-size: 20px;
      text-align: center;
      line-height: 2;
      width: 100%;
    }
  }
`;

export default Login;
