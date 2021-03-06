import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const LeftSide = ({ user }) => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <AnchorTag>
            <Photo />
            <Link>Welcome, {user ? `${user.displayName}` : "there!"}</Link>
          </AnchorTag>
          <AnchorTag>
            <AddPhotoText>Add a photo</AddPhotoText>
          </AnchorTag>
        </UserInfo>
        <Widget>
          <AnchorTag>
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <img src="/images/widget-icon.svg" alt="connections" />
          </AnchorTag>
        </Widget>
        <Item>
          <span>
            <img src="/images/item-icon.svg" alt="add item" />
            My items
          </span>
        </Item>
      </ArtCard>

      <CommunityCard>
        <AnchorTag>
          <span>Groups</span>
        </AnchorTag>
        <AnchorTag>
          <span>
            Events
            <img src="/images/plus-icon.svg" alt="add event" />
          </span>
        </AnchorTag>
        <AnchorTag>
          <span>Follow hashtags</span>
        </AnchorTag>
        <AnchorTag>
          <span>Discover more</span>
        </AnchorTag>
      </CommunityCard>
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
  background-color: #fff;
  border: none;
  border-radius: 7px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0/ 20%);
  text-align: center;
  transition: box-shadow 0.8s;
`;

const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
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
  padding: 2px 0;

  &:hover {
    background-color: #f3f2ef;
  }

  ${AnchorTag} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 12px;

    div {
      display: flex;
      flex-direction: column;
      margin-right: 1.2rem;
      text-align: left;

      span {
        font-size: 13px;
        line-height: 1.4;

        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }

        &:last-child {
          font-size: 12px;
        }
      }
    }
  }

  img {
    height: 19px;
    margin-right: 0;
  }
`;

const Item = styled.a`
  border-color: rgba(0, 0, 0, 0.8);
  display: block;
  font-size: 13px;
  text-align: left;
  padding: 12px;

  span {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 1);

    img {
      padding-right: 8px;
    }
  }

  &:hover {
    background-color: #f3f2ef;
  }
`;

const CommunityCard = styled(ArtCard)`
  background-color: #fff;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  padding: 8px 0 0;
  text-align: left;
  margin-top: 8px;

  ${AnchorTag} {
    font-size: 13px;
    padding: 4px 12px;

    &:hover {
      background-color: #f3f2ef;
      color: #0a66c2;
      font-weight: 600;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;

      &:last-child {
        margin-bottom: 4px;
      }
    }

    &:last-child {
      border-top: 1px solid #d6cec2;
      color: rgba(0, 0, 0, 0.7);
      padding: 8px 12px 8px;

      &:hover {
        background-color: #f3f2ef;
        color: rgba(0, 0, 0, 1);
        cursor: pointer;
      }
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(LeftSide);
