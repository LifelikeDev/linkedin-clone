import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import styled from "styled-components";
import { fetchArticlesAPI } from "../actions/actions";
import PostModal from "./PostModal";

const Main = ({ user, loading, articles, fetchArticles }) => {
  const [modalState, setModalState] = useState("close");

  const revealModal = (e) => {
    e.preventDefault();

    console.log("revealModal called...");
    setModalState("open");
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <Container>
      <PostItemWrapper>
        <div>
          {user && user.photoURL ? (
            <img src={user.photoURL} alt="user profile icon" />
          ) : (
            <img src="/images/user.svg" alt="user profile icon" />
          )}
          <input
            onFocus={(e) => revealModal(e)}
            placeholder="Start a post"
            disabled={loading ? true : false}
          />
        </div>

        <div>
          <button onClick={(e) => revealModal(e)}>
            <img src="/images/in-post-image.svg" alt="upload photos" />
            <span>Photo</span>
          </button>

          <button onClick={(e) => revealModal(e)}>
            <img src="/images/in-post-video.svg" alt="upload video" />
            <span>Video</span>
          </button>

          <button onClick={(e) => revealModal(e)}>
            <img src="/images/in-post-event.svg" alt="add an event" />
            <span>Event</span>
          </button>

          <button onClick={(e) => revealModal(e)}>
            <img src="/images/in-write-article.svg" alt="add an article" />
            <span>Write Article</span>
          </button>
        </div>
      </PostItemWrapper>

      {articles.length === 0 ? (
        <NoPosts>
          <p>
            There are no posts at the moment. Add a post to display it here.
          </p>
        </NoPosts>
      ) : (
        <>
          {loading && (
            <LoadSpinner>
              <img
                src="/images/spin-loader-animated.svg"
                alt="loading animation"
              />
            </LoadSpinner>
          )}

          {articles.map((article, index) => {
            const {
              actor: { title, description, date, image },
              content,
              sharedImg,
              video,
              comments,
            } = article;
            return (
              <Article key={index}>
                <SharedPostInfo>
                  <AnchorTag>
                    <img src={image} alt="user profile icon" />
                    <div>
                      <span>{title}</span>
                      <span>{description}</span>
                      <span>{date.toDate().toLocaleDateString()}</span>
                    </div>
                  </AnchorTag>
                  <button>
                    <img src="/images/ellipsis.svg" alt="ellipsis" />
                  </button>
                </SharedPostInfo>

                <Description>{content}</Description>

                <SharedImage>
                  {!sharedImg && video ? (
                    <ReactPlayer width={"100%"} url={video} />
                  ) : (
                    sharedImg && (
                      <img src={sharedImg} alt="post content" loading="lazy" />
                    )
                  )}
                </SharedImage>

                <PostReactions>
                  <li>
                    <button>
                      <img src="/images/likes.svg" alt="likes" />
                      <img src="/images/reactions.svg" alt="reactions" />
                      <img src="/images/love-reaction.svg" alt="loves" />
                      <span>{comments}</span>
                    </button>
                  </li>
                  <li>
                    <AnchorTag>
                      {comments > 0
                        ? `${comments} comments`
                        : `${comments} comment`}
                    </AnchorTag>
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
            );
          })}

          <PostModal modalState={modalState} setModalState={setModalState} />
        </>
      )}
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
  border-radius: 7px;
  background-color: #fff;
  color: #958b7b;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  margin-bottom: 20px;

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

const NoPosts = styled.div`
  margin: 50px 0 10px;

  & > p {
    color: #888;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 1.5;
    text-align: center;
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 14px;
  overflow: visible;
`;

const LoadSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;

  img {
    width: 40px;
  }
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
          color: rgba(0, 0, 0, 0.9);
          font-size: 14px;
          font-weight: 700;
        }

        &:nth-child(n + 1) {
          color: rgba(0, 0, 0, 0.5);
          font-size: 12px;
          margin-bottom: 4px;
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
  font-size: 15px;
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
  padding: 8px 10px;
  list-style-type: none;

  li {
    /* border: 1px solid blue; */
    font-size: 12px;
    margin-right: 4px;
    vertical-align: baseline;

    &:last-of-type {
      line-height: 1.4;
    }

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
  border-top: 1px solid rgba(0, 0, 0, 0.18);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 6px 2px;
  margin: 0 10px;

  button {
    background: transparent;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 10px 5px;
    outline: none;

    &:hover {
      background-color: #eee;
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
    loading: state.articleState.loading,
    articles: state.articleState.articles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticles: () => dispatch(fetchArticlesAPI()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
