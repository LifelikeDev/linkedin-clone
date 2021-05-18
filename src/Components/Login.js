import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { signInAPI } from "../actions/actions";

const Login = ({ signIn, user }) => {
  return (
    <Container>
      {/* if user exists, redirect user to home page */}
      {user && <Redirect to="/home" />}

      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="Logo" />
        </a>
        <div>
          <Join>Join now</Join>
          <SignIn onClick={signIn}>Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <div>
            <h1>Welcome to your professional community</h1>
            <Form>
              <GoogleSignIn onClick={signIn}>
                <img src="/images/google.svg" alt="sign in with google" />
                Sign in with Google
              </GoogleSignIn>
            </Form>
          </div>
          <div>
            <img
              src="/images/login-illustration.svg"
              alt="hero illustration"
              className="hero-illustration"
            />
          </div>
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
  margin: 0 8px 0 0;
  text-decoration: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.9);
  }
`;

const SignIn = styled.a`
  background-color: transparent;
  border-radius: 24px;
  box-shadow: inset 0 0 0 1px #0a66c2;
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
  /* border: 2px solid red; */
  display: flex;
  align-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  min-height: 700px;
  margin: auto;
  max-width: 1128px;
  padding: 50px 0 80px;
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    min-height: 0px;
  }
`;

const Hero = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 392px;
    margin: 0 auto;
  }

  h1 {
    color: #2977c9;
    font-size: 56px;
    font-weight: 300;
    line-height: 70px;
    padding-bottom: 0;
    margin-bottom: 1rem;
    width: 59%;

    @media (max-width: 768px) {
      font-size: 42px;
      /* text-align: center; */
      line-height: 1.25;
      width: 100%;
    }
  }

  img.hero-illustration {
    /* border: 2px solid red; */
    position: absolute;
    bottom: 190px;
    right: -150px;
    height: 670px;
    width: 700px;
    z-index: -1;

    @media (max-width: 768px) {
      top: 230px;
      bottom: -2px;
      width: inherit;
      margin: auto;
      height: initial;
      position: initial;
      z-index: 0;
    }
  }
`;

// Form Component
const Form = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

// Sign In Button
const GoogleSignIn = styled.button`
  background-color: transparent;
  box-shadow: inset 0 0 0 1px rgba(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0) inset 0 0 0 1px rgba(0 0 0 / 0);
  border-radius: 28px;
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  padding: 10px 14px;
  transition: 0.17s ease;
  vertical-align: middle;
  width: 320px;
  z-index: 0;

  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    cursor: pointer;
    color: rgba(0, 0, 0, 0.9);
  }

  img {
    margin-right: 15px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// mapStateToProps
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: () => dispatch(signInAPI()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
