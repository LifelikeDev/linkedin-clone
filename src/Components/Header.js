import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { signOutAPI } from "../actions/actions";

const Header = ({ signOut, user }) => {
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
              <AnchorTag>
                <img src="/images/nav-home.svg" alt="home icon" />
                <span>Home</span>
              </AnchorTag>
            </NavList>

            <NavList>
              <AnchorTag>
                <img src="/images/nav-network.svg" alt="network icon" />
                <span>My Network</span>
              </AnchorTag>
            </NavList>

            <NavList>
              <AnchorTag>
                <img src="/images/nav-jobs.svg" alt="jobs icon" />
                <span>Jobs</span>
              </AnchorTag>
            </NavList>

            <NavList>
              <AnchorTag>
                <img src="/images/nav-messaging.svg" alt="messaging icon" />
                <span>Messaging</span>
              </AnchorTag>
            </NavList>

            <NavList>
              <AnchorTag>
                <img
                  src="/images/nav-notifications.svg"
                  alt="notifications icon"
                />
                <span>Notifications</span>
              </AnchorTag>
            </NavList>

            <UserIcon>
              <AnchorTag>
                {/* Check if user profile exits. If it does ? update the profile icon : use default */}
                {user && user.photoURL ? (
                  <img src={user.photoURL} alt="user profile icon" />
                ) : (
                  <img src="/images/user.svg" alt="user profile icon" />
                )}
                <span>
                  Me
                  <img src="/images/down-icon.svg" alt="dropdown icon" />
                </span>
              </AnchorTag>

              <SignOut>
                <AnchorTag onClick={signOut}>Sign Out</AnchorTag>
              </SignOut>
            </UserIcon>

            <WorkIcon>
              <AnchorTag>
                <img src="/images/nav-work.svg" alt="work icon" />
                <span>
                  Work
                  <img src="/images/down-icon.svg" alt="dropdown icon" />
                </span>
              </AnchorTag>
            </WorkIcon>

            <JobPost>
              <AnchorTag>
                <img src="/images/clothes-hanger.svg" alt="post a job" />
                <span>Post a Job</span>
              </AnchorTag>
            </JobPost>
          </NavWrapper>
        </Nav>
      </Content>
    </Component>
  );
};

const Component = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 0 12px;
  }
`;

const AnchorTag = styled.a`
  text-decoration: none;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1128px;
  min-height: 100%;
`;

const Logo = styled.span`
  font-size: 0px;
  margin-right: 8px;

  @media (max-width: 768px) {
    padding-bottom: 3px;
  }
`;

const Search = styled.div`
  flex-grow: 1;
  opacity: 1;
  position: relative;

  @media (max-width: 768px) {
    padding-bottom: 3px;
  }

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
      border-top: 0;
      border-color: rgba(0, 0, 0, 0.9);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      height: 100%;
      width: 100%;

      @media (max-width: 768px) {
        border-bottom: 4px solid rgba(0, 0, 0, 0.9);
      }
    }
  }

  ${AnchorTag} {
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

      @media (max-width: 768px) {
        display: none;
        line-height: 1;
      }
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  &:active {
    ${AnchorTag} {
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

  @media (max-width: 768px) {
    background-color: #eee;
    top: -45px;

    &:hover {
      background-color: #ddd;
    }
  }
`;

// UserIcon
const UserIcon = styled(NavList)`
  ${AnchorTag} > img {
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

// mapStateToProps
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const JobPost = styled(NavList)`
  ${AnchorTag} > img {
    height: 26px;
    width: 26px;
  }
`;

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOutAPI()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
