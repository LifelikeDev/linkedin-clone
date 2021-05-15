import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <Container>
      <PostWrapper>
        <div>
          <img src="/images/user.svg" alt="Write a post" />
          <input type="text" placeholder="Write a post" />
        </div>

        <div>
          <button>
            <img src="/images/image-icon.svg" alt="upload photos" />
            <span>Photo</span>
          </button>

          <button>
            <img src="/images/video-icon.svg" alt="upload video" />
            <span>Video</span>
          </button>

          <button>
            <img src="/images/event-icon.svg" alt="add an event" />
            <span>Event</span>
          </button>

          <button>
            <img src="/images/article-icon.svg" alt="add an article" />
            <span>Write Article</span>
          </button>
        </div>
      </PostWrapper>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

// const AnchorTag = styled.a`
//   text-decoration: none;
// `;

const CommonCard = styled.div`
  background-color: #fff;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0/ 20%);
  border: none;
  margin-bottom: 8px;
  /* overflow: hidden; */
  position: relative;
  text-align: center;
`;

const PostWrapper = styled(CommonCard)`
  background-color: #fff;
  color: #958b7b;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  margin-bottom: 8px;

  div {
    button {
      background-color: transparent;
      border: none;
      display: flex;
      align-items: center;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      font-weight: 600;
      line-height: 1.4;
      min-height: 32px;
      outline: none;
    }

    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0 16px;

      img {
        border-radius: 50%;
        margin-right: 6px;
        width: 36px;
      }

      input {
        background-color: #fff;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 35px;
        flex-grow: 1;
        margin: 4px 0;
        padding: 12px 0 12px 16px;
        text-align: left;

        &:focus,
        &:active {
          outline: none;
        }
      }
    }

    &:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
      padding-bottom: 5px;

      button {
        cursor: pointer;

        img {
          height: 20px;
          margin: 0 4px 0 -2px;
        }

        span {
          color: rgba(10, 102, 194, 0.71);
        }
      }
    }
  }
`;

export default Main;
