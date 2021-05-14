import React from "react";
import styled from "styled-components";

const LeftSide = () => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <AnchorTag>
            <Photo />
            <Link>Welcome, there!</Link>
          </AnchorTag>
          <AnchorTag>
            <AddPhotoText>Add a photo</AddPhotoText>
          </AnchorTag>
        </UserInfo>
        <Widget>
          <AnchorTag>
            <div>
              <span>Connections</span>
              <span>Grow Your Network</span>
            </div>
            <img src="/images/widget-icon.svg" alt="connections" />
          </AnchorTag>
        </Widget>
        <Item>
          <span>
            <img src="/images/item-icon.svg" alt="add item" />
          </span>
        </Item>
      </ArtCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: leftSide;
`;

const AnchorTag = styled.a`
  text-decoration: none;
`;

const ArtCard = styled.div`
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0/ 20%);
  margin-top: 8px;
  text-align: center;
  /* overflow: hidden; */
  transition: box-shadow 0.8s;
`;

const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;

  /* button {
    pointer-events: none;
    display: block;
    text-align: center;
    width: 100%;
  } */
`;

const CardBackground = styled.div`
  background: url("./images/card-bg.svg");
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;

const Photo = styled.div`
  background: url("./images/photo.svg");
  background-color: #fff;
  background-clip: content-box;
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  border: 2px solid #fff;
  border-radius: 50%;
  box-shadow: none;
  box-sizing: border-box;
  height: 72px;
  margin: -38px auto 12px;
  width: 72px;
`;

const Link = styled.div`
  color: rgba(0, 0, 0, 0.85);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
`;

const AddPhotoText = styled.div`
  color: #0a66c2;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  margin-top: 4px;
`;

const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 0;

  ${AnchorTag} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 12px;

    div {
      display: flex;
      flex-direction: column;
      text-align: left;

      span {
        font-size: 13px;
        line-height: 1.4;

        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  img {
    height: 19px;
  }
`;

const Item = styled.a``;

export default LeftSide;
