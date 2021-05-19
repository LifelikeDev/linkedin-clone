import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PostModal from "./PostModal";

const Main = ({ user }) => {
  const [modalState, setModalState] = useState("close");

  // const toggleModal = (e) => {
  //   e.preventDefault();

  //   console.log(e, e.target);

  //   if (e.target !== e.currentTarget) {
  //     return;
  //   }

  //   switch (modalState) {
  //     case "open":
  //       setModalState("close");
  //       break;
  //     case "close":
  //       setModalState("open");
  //       break;
  //     default:
  //       setModalState("close");
  //       break;
  //   }
  // };

  const revealModal = (e) => {
    e.preventDefault();

    console.log("revealModal called");
    setModalState("open");
  };

  return (
    <Container>
      <PostItemWrapper>
        <div>
          {user && user.photoURL ? (
            <img src={user.photoURL} alt="user profile icon" />
          ) : (
            <img src="/images/user.svg" alt="user profile icon" />
          )}
          <input onFocus={(e) => revealModal(e)} placeholder="Write a post" />
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
      </PostItemWrapper>

      <Article>
        <SharedPostInfo>
          <AnchorTag>
            {user && user.photoURL ? (
              <img src={user.photoURL} alt="user profile icon" />
            ) : (
              <img src="/images/user.svg" alt="user profile icon" />
            )}
            <div>
              <span>Title</span>
              <span>Info</span>
              <span>Image</span>
            </div>
          </AnchorTag>
          <button>
            <img src="/images/ellipsis.svg" alt="ellipsis" />
          </button>
        </SharedPostInfo>

        <Description>Some Description Here...</Description>

        <SharedImage>
          <img src="/images/shared-image.jpg" alt="Waters by a city" />
        </SharedImage>

        <PostReactions>
          <li>
            <button>
              <img src="/images/likes.svg" alt="likes" />
              <img src="/images/reactions.svg" alt="reactions" />
              <img src="/images/love-reaction.svg" alt="loves" />
              <span>24</span>
            </button>
          </li>
          <li>
            <AnchorTag>5 comments </AnchorTag>
          </li>
        </PostReactions>

        <ReactToPost>
          <button>
            <img src="/images/like-post.svg" alt="like post" />
            <span>Like</span>
          </button>
          <button>
            <img src="/images/comment-post.svg" alt="comment on post" />
            <span>Comment</span>
          </button>
          <button>
            <img src="/images/share-post.svg" alt="share post" />
            <span>Share</span>
          </button>
          <button>
            <img src="/images/send-post.svg" alt="send post" />
            <span>Send</span>
          </button>
        </ReactToPost>
      </Article>

      <PostModal modalState={modalState} setModalState={setModalState} />
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const AnchorTag = styled.a`
  text-decoration: none;
`;

const CommonCard = styled.div`
  background-color: #fff;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0/ 20%);
  border: none;
  margin-bottom: 8px;
  /* overflow: hidden; */
  position: relative;
  text-align: center;
`;

const PostItemWrapper = styled(CommonCard)`
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

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedPostInfo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;

  ${AnchorTag} {
    display: flex;
    flex-grow: 1;
    margin-right: 12px;
    overflow: hidden;

    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;

      span {
        text-align: left;

        &:first-child {
          font-size: 14px;
          font-weight: 700;
        }

        &:nth-child(n + 1) {
          color: rgba(0, 0, 0, 0.7);
          font-size: 13px;
        }
      }
    }

    img {
      border-radius: 50%;
      height: 48px;
      width: 48px;
    }
  }

  button {
    background: transparent;
    border: none;
    position: absolute;
    height: 30px;
    top: 0;
    right: 0;
    opacity: 0.6;
    width: 50px;

    img {
      height: 100%;
      width: 100%;
    }
  }
`;

const Description = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-size: 14px;
  overflow: hidden;
  padding: 0 16px;
  text-align: left;
`;

const SharedImage = styled.div`
  background-color: #f9fafb;
  display: block;
  position: relative;
  margin-top: 8px;
  width: 100%;

  img {
    object-fit: cover;
    width: 100%;
  }
`;

const PostReactions = styled.ul`
  display: flex;
  align-items: center;
  line-height: 1.3;
  overflow: auto;
  padding: 8px 0;
  list-style-type: none;

  li {
    font-size: 12px;
    margin-right: 4px;

    button {
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      outline: none;

      span {
        font-size: 12px;
      }
    }
  }
`;

const ReactToPost = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 4px 2px;
  margin: 0 auto;

  button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    outline: none;

    &:hover {
      background-color: #0a66c211;
    }

    img {
      margin-right: 4px;
    }

    span {
      font-size: 13px;
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(Main);
