import styled from "styled-components";
import { connect } from "react-redux";

import React from "react";
import LeftSide from "./LeftSide";
import Main from "./Main";
import RightSide from "./RightSide";
import { Redirect } from "react-router-dom";

const Home = ({ user }) => {
  return (
    <Container>
      {!user && <Redirect to="/" />}
      <Content>
        <AdSection></AdSection>
        <Layout>
          <LeftSide />
          <Main />
          <RightSide />
        </Layout>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f3f2ef;
  padding: 42px 0;
  max-width: 100%;

  @media (max-width: 768px) {
    padding-top: 24px;
  }
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 1128px;
`;

const AdSection = styled.section`
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  text-align: center;
  text-decoration: underline;
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftSide main rightSide";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  grid-template-rows: auto;
  margin: 25px auto;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(Home);
