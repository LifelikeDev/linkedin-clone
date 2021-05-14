import styled from "styled-components";

import React from "react";

const Home = () => {
  return (
    <Container>
      <Content>
        <Section>
          <p>
            <span>Hiring in a hurry? </span>
            Find talented Pros in record time with Upwork and keep business
            moving
          </p>
        </Section>
        <Layout>
          <div>Left Side</div>
          <div>Main</div>
          <div>Right Side</div>
        </Layout>
      </Content>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding-top: 42px;
  max-width: 100%;

  @media (max-width: 768px) {
    padding-top: 24px;
  }
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 1128px;
`;

const Section = styled.section`
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  text-align: center;
  min-height: 50px;
  text-decoration: underline;

  p {
    font-weight: 600;
    line-height: 1.4;

    span {
      color: #0a66c2;
      font-weight: 700;

      @media (max-width: 768px) {
        display: block;
      }
    }
  }

  /* button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: inline;
    font-size: 16px;
    margin: 0;
    outline: none;
    padding: 0;
    text-decoration: none;
  } */
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftSide Main rightSide";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
`;
