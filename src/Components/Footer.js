import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Primary>
        <Column>
          <img src="/images/login-logo.svg" alt="logo" />
        </Column>
        <Column>
          <h4>General</h4>
          <NavList>
            <NavItem>Sign Up</NavItem>
            <NavItem>Help Center</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Press</NavItem>
            <NavItem>Blog</NavItem>
            <NavItem>Careers</NavItem>
            <NavItem>Developers</NavItem>
          </NavList>
        </Column>
        <Column>
          <h4>Browse LinkedIn</h4>
          <NavList>
            <NavItem>Learning</NavItem>
            <NavItem>Jobs</NavItem>
            <NavItem>Salary</NavItem>
            <NavItem>Mobile</NavItem>
            <NavItem>Services</NavItem>
          </NavList>
        </Column>
        <Column>
          <h4>Business Solutions</h4>
          <NavList>
            <NavItem>Talent</NavItem>
            <NavItem>Marketing</NavItem>
            <NavItem>Sales</NavItem>
            <NavItem>Learning</NavItem>
          </NavList>
        </Column>
        <Column>
          <h4>Directories</h4>
          <NavList>
            <NavItem>Members</NavItem>
            <NavItem>Jobs</NavItem>
            <NavItem>Companies</NavItem>
            <NavItem>Salaries</NavItem>
            <NavItem>Featured</NavItem>
            <NavItem>Learning</NavItem>
            <NavItem>Posts</NavItem>
            <NavItem>Articles</NavItem>
            <NavItem>Schools</NavItem>
            <NavItem>News</NavItem>
            <NavItem>News Letters</NavItem>
            <NavItem>Services</NavItem>
            <NavItem>Interview Prep</NavItem>
          </NavList>
        </Column>
      </Primary>
    </Container>
  );
};

const Container = styled.div`
  background-color: #faf9f7;
`;

const Primary = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas: "first second third fourth fifth";
  padding: 30px 0;
  margin: 0 auto;
  max-width: 1129px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "first"
      "second"
      "third"
      "fourth"
      "fifth";
    padding: 20px 15px;
  }
`;

const Column = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }

  h4 {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  &:first-of-type {
    grid-area: "first";

    img {
      width: 78px;
    }
  }

  &:nth-of-type(2) {
    grid-area: "second";
  }

  &:nth-of-type(3) {
    grid-area: "third";
  }

  &:nth-of-type(4) {
    grid-area: "fourth";
  }

  &:nth-of-type(5) {
    grid-area: "fifth";
  }
`;

const NavList = styled.ul`
  list-style-type: none;
`;

const NavItem = styled.li`
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;

  &:hover {
    color: #0a66c2;
    cursor: pointer;
    text-decoration: underline;
  }
`;

export default Footer;
