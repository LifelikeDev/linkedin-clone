import styled from "styled-components";

import React from "react";

const Header = () => {
  return (
    <Component>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/home-logo.svg" alt="LinkedIn Logo" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="search icon" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavWrapper>
            <NavList className="active">
              <button>
                <img src="/images/nav-home.svg" alt="home icon" />
                <span>Home</span>
              </button>
            </NavList>
            <NavList>
              <button>
                <img src="/images/nav-network.svg" alt="network icon" />
                <span>My Network</span>
              </button>
            </NavList>
            <NavList>
              <button>
                <img src="/images/nav-jobs.svg" alt="jobs icon" />
                <span>Jobs</span>
              </button>
            </NavList>
            <NavList>
              <button>
                <img src="/images/nav-messaging.svg" alt="messaging icon" />
                <span>Messaging</span>
              </button>
            </NavList>
            <NavList>
              <button>
                <img
                  src="/images/nav-notifications.svg"
                  alt="notifications icon"
                />
                <span>Notifications</span>
              </button>
            </NavList>
            <UserIcon>
              <button>
                <img src="/images/user.svg" alt="user icon" />
                <span>
                  Me
                  <img src="/images/down-icon.svg" alt="dropdown icon" />
                </span>
              </button>

              <SignOut>
                <button>Sign Out</button>
              </SignOut>
            </UserIcon>
            <WorkIcon>
              <button>
                <img src="/images/nav-work.svg" alt="work icon" />
                <span>
                  Work
                  <img src="/images/down-icon.svg" alt="dropdown icon" />
                </span>
              </button>
            </WorkIcon>
          </NavWrapper>
        </Nav>
      </Content>
    </Component>
  );
};

export default Header;

const Component = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding: 0 24px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 1128px;
  min-height: 100%;
`;

const Logo = styled.span`
  font-size: 0px;
  margin-right: 8px;
`;

const Search = styled.div`
  flex-grow: 1;
  opacity: 1;
  position: relative;

  & > div {
    max-width: 280px;

    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-color: #dce6f1;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      font-weight: 400;
      height: 34px;
      padding: 0 8px 0 40px;
      outline: none;
      line-height: 1.75;
      vertical-align: text-top;
      width: 218px;

      &:focus,
      &:active {
        border: 1px solid #0a66c2;
      }
    }
  }
`;

// Search Icon
const SearchIcon = styled.div`
  border-radius: 0 2px 2px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 4px;
  position: absolute;
  pointer-events: none;
  margin: 0;
  opacity: 0.6;
  top: 10px;
  width: 40px;
  z-index: 1;
`;

// Navbar
const Nav = styled.nav`
  display: block;
  margin-left: auto;

  @media (max-width: 768px) {
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
`;

// Nav Wrapper
const NavWrapper = styled.ul`
  display: flex;
  flex-wrap: nowrap;
`;

// Nav List
const NavList = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  list-style: none;

  &.active {
    span::after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      border-color: rgba(0, 0, 0, 0.9);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
    }
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    opacity: 0.7;
    outline: none;
    position: relative;
    text-decoration: none;

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  &:active {
    button {
      opacity: 0.9;
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

// SignOut
const SignOut = styled.div`
  background-color: var(--white, #fff);
  display: none;
  font-size: 16px;
  height: 40px;
  position: absolute;
  text-align: center;
  top: 45px;
  transition: 1.6s;
  width: 80px;

  &:hover {
    background-color: #eee;
    transition: none;
  }
`;

// UserIcon
const UserIcon = styled(NavList)`
  button > img {
    border-radius: 50%;
    height: 26px;
    width: 26px;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &:hover {
    ${SignOut} {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

// Work
const WorkIcon = styled(UserIcon)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;
