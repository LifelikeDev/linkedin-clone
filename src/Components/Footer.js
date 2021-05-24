import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Primary>
        <Details>
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
        </Details>
      </Primary>
      <Sub>
        <List>
          <FooterItem>
            <img src="/images/linkedin-footer-icon.svg" alt="LinkedIn" />
            <span>© 2021</span>
          </FooterItem>
          <FooterItem>About</FooterItem>
          <FooterItem>Accessibility</FooterItem>
          <FooterItem>User Agreement</FooterItem>
          <FooterItem>Privacy Policy</FooterItem>
          <FooterItem>Cookie Policy</FooterItem>
          <FooterItem>Copyright Policy</FooterItem>
          <FooterItem>Brand Policy</FooterItem>
          <FooterItem>Guest Controls</FooterItem>
          <FooterItem>Community Guidelines</FooterItem>
          <FooterItem>
            <span>Language</span>
            <img src="/images/footer-dropdown.svg" alt="more languages" />
          </FooterItem>
        </List>
      </Sub>
    </Container>
  );
};

const Container = styled.section`
  background-color: #fff;
`;

const Primary = styled.div`
  background-color: #faf9f7;
`;

const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas: "first second third fourth fifth";
  padding: 30px 10px;
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
    padding: 20px 16px;
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
  font-size: 13px;
  font-weight: 600;
  line-height: 1.8;
  margin-bottom: 8px;

  &:hover {
    color: #0a66c2;
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Sub = styled.div`
  background-color: #fff;
  padding: 18px 16px;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  margin: 0 auto;
  width: 85%;

  @media (max-width: 1100px) {
    flex-wrap: wrap;
    width: 100%;
  }
`;

const FooterItem = styled(NavItem)`
  font-size: 11px;
  font-weight: 600;
  margin-bottom: 0;

  @media (max-width: 768px) {
    line-height: 1.8;
    width: 50%;
  }

  &:first-of-type,
  &:last-of-type {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
      width: 50%;
      justify-content: flex-start;
    }

    * + * {
      margin-left: 5px;
    }
  }

  &:first-of-type {
    width: 100px;

    &:hover {
      color: rgba(0, 0, 0, 0.6);
      cursor: default;
      text-decoration: none;
    }

    @media (max-width: 768px) {
      width: 50%;
    }

    img {
      width: 50px;

      @media (max-width: 768px) {
        width: 60px;
      }
    }

    span {
      font-weight: 500;
    }
  }
`;

export default Footer;
