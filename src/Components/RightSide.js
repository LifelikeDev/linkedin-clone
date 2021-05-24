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
            <article>
              <AnchorTag>
                <Avatar />
              </AnchorTag>
              <div>
                <span>#LinkedIn</span>
                <button>
                  <img src="/images/add-follow.svg" alt="follow" />
                  Follow
                </button>
              </div>
            </article>
          </li>
          <li>
            <article>
              <AnchorTag>
                <Avatar />
              </AnchorTag>
              <div>
                <span>#Video</span>
                <button>
                  <img src="/images/add-follow.svg" alt="follow" />
                  Follow
                </button>
              </div>
            </article>
          </li>
        </FeedList>

        <Recommendation>
          <span>View all recommendations</span>
          <img src="/images/right-icon.svg" alt="view all recommendations" />
        </Recommendation>
      </FollowCard>

      <BannerCard>
        <img src="/images/banner-card.jpg" alt="linkedin banner card" />
      </BannerCard>

      <SiteMap>
        <List>
          <ListItem>About</ListItem>
          <ListItem>Accessibility</ListItem>
          <ListItem>Help Center</ListItem>
          <ListItem>
            <span>Privacy &amp; Terms</span>
            <img src="/images/footer-dropdown.svg" alt="Privacy and Terms" />
          </ListItem>
          <ListItem>Ad Choices</ListItem>
          <ListItem>Advertising</ListItem>
          <ListItem>
            <span>Business Services</span>
            <img src="/images/footer-dropdown.svg" alt="Business Services" />
          </ListItem>
          <ListItem>Get the LinkedIn app</ListItem>
          <ListItem>More</ListItem>
        </List>
        <CopyInfo>
          <img src="/images/login-logo.svg" alt="LinkedIn" />
          <span>LinkedIn Corporation</span>
          <span>&copy; 2021</span>
        </CopyInfo>
      </SiteMap>
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

    & > article {
      display: flex;
      align-items: flex-start;
      margin-bottom: 8px;

      div {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        margin-left: 8px;

        span {
          margin-bottom: 8px;
        }

        button {
          background-color: transparent;
          border-width: 1px;
          border-radius: 22px;
          box-sizing: border-box;
          box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0.6);
          color: rgba(0, 0, 0, 0.6);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          padding: 14px 10px;
          max-height: 20px;
          max-width: 420px;
          text-align: center;
          transition: 0.2s ease;
          outline: none;

          &:hover {
            background-color: #f3f2ef;
            border-width: 2px;
          }

          img {
            padding-right: 4px;
          }
        }
      }
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
  align-items: flex-start;
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
  padding: 0 6px;
  margin-bottom: 20px;

  img {
    height: 100%;
    width: 100%;
  }
`;

const SiteMap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  margin: 0 auto 20px;
  width: 75%;

  * + * {
    margin-left: 18px;
  }
`;

const ListItem = styled.li`
  color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  line-height: 2;

  * + * {
    margin-left: 4px;
    width: 10px;
  }

  &:hover {
    color: #0a66c2;
    cursor: pointer;
    text-decoration: underline;
  }
`;

const CopyInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  vertical-align: baseline;

  img {
    width: 56px;
  }

  span {
    font-size: 12px;
  }

  * + * {
    margin-left: 4px;
  }
`;

export default RightSide;
