import React from "react";
import styled from "styled-components";

const RightSide = () => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src="/images/feed-icon.svg" alt="add to your feed" />
        </Title>

        <FeedList>
          <li>
            <AnchorTag>
              <Avatar />
            </AnchorTag>
            <div>
              <span>#LinkedIn</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <AnchorTag>
              <Avatar />
            </AnchorTag>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>

        <Recommendation>
          <span>View all recommendations</span>
          <img src="/images/right-icon.svg" alt="view all recommendations" />
        </Recommendation>
      </FollowCard>

      <BannerCard>
        {/* <img
          src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
          alt=""
        /> */}

        <img src="/images/banner-card.jpg" alt="linkedin banner card" />
      </BannerCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: rightSide;
`;

const AnchorTag = styled.a`
  text-decoration: none;
`;

const FollowCard = styled.div`
  background-color: #fff;
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0/ 20%);
  margin-bottom: 8px;
  padding: 12px;
  position: relative;
  text-align: center;
`;

const Title = styled.div`
  color: rgba(0, 0, 0, 0.6);
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  width: 100%;
`;

const FeedList = styled.ul`
  list-style-type: none;
  margin-top: 16px;

  li {
    display: flex;
    align-items: center;
    font-size: 14px;
    margin: 12px 0;
    position: relative;

    & > div {
      display: flex;
      align-items: flex-start;
      flex-direction: column;

      span {
        margin-bottom: 4px;
      }
    }

    button {
      background-color: transparent;
      border-radius: 8px;
      box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0.6);
      box-sizing: border-box;
      color: rgba(0, 0, 0, 0.6);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      padding: 12px;
      max-height: 20px;
      max-width: 420px;
      text-align: center;
      outline: none;
    }
  }
`;

const Avatar = styled.div`
  background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 8px;
  height: 40px;
  width: 40px;
`;

const Recommendation = styled.a`
  color: #0a66c2;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 13px;

  &:hover {
    transform: scale(1.01);
  }

  span {
    margin-right: 3px;
  }
`;

const BannerCard = styled(FollowCard)`
  cursor: pointer;
  img {
    height: 100%;
    width: 100%;
  }
`;

export default RightSide;
