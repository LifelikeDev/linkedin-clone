import React, { useState } from "react";
import styled from "styled-components";

const PostModal = ({ modalState, setModalState }) => {
  const [postText, setPostText] = useState("");

  // const reset = (e) => {
  //   setPostText("");

  //   console.log(e);
  //   toggleModal(e);
  // };

  const hideModal = (e) => {
    e.preventDefault();

    setPostText("");

    setModalState("close");

    console.log("hideModal invoked...");
  };

  return (
    <>
      {modalState === "open" && (
        <Container>
          <Content>
            <Header>
              <h2>Create a post</h2>
              <button onClick={(e) => hideModal(e)}>
                <img src="/images/close-icon.svg" alt="close modal" />
              </button>
            </Header>

            <ShareContent>
              <UserInfo>
                <img src="/images/user.svg" alt="user profile icon" />
                <span>name</span>
              </UserInfo>

              <TextField>
                <textarea
                  value={postText}
                  onChange={(e) => setPostText(e.target.value)}
                  placeholder="What do you want to talk about?"
                  autoFocus={true}
                ></textarea>
              </TextField>
            </ShareContent>

            <ShareOptions>
              <AttachAssets>
                <AssetButtons>
                  <img src="/images/share-image.svg" alt="share photos" />
                </AssetButtons>
                <AssetButtons>
                  <img src="/images/share-multimedia.svg" alt="share videos" />
                </AssetButtons>
              </AttachAssets>

              <ShareComment>
                <AssetButtons>
                  <img src="/images/comment-post.svg" alt="add comment" />
                  <span>Anyone</span>
                </AssetButtons>
              </ShareComment>

              <PostContent>Post</PostContent>
            </ShareOptions>
          </Content>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  animation: fadeIn 0.3s;
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

const Content = styled.div`
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 552px;
  max-height: 90%;
  position: relative;
  overflow: initial;
  top: 32px;
  width: 100%;
`;

const Header = styled.article`
  border-bottom: rgba(0, 0, 0, 0.15);
  color: rgba(0, 0, 0, 0.75);
  display: flex;
  font-weight: 600;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  line-height: 1.5;
  padding: 16px 20px;

  button {
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.1);
    cursor: pointer;
    height: 30px;
    width: 30px;

    img {
      pointer-events: none;
      width: 100%;
    }
  }
`;

const ShareContent = styled.div`
  background-color: transparent;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex-grow: 1;
  padding: 8px 12px;
  overflow-y: auto;
  vertical-align: baseline;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;

  img {
    background-clip: content-box;
    border: 1px solid transparent;
    border-radius: 50%;
    height: 48px;
    width: 48px;
  }

  span {
    font-size: 15px;
    font-weight: 600;
    line-height: 1.5;
    margin-left: 6px;
  }
`;

const ShareOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
`;

const AttachAssets = styled.div`
  display: flex;
  align-items: center;
  padding-right: 8px;
`;

const AssetButtons = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  min-width: auto;
  outline: none;

  img {
    height: 30px;
    width: 25px;
    opacity: 0.6;
  }

  span {
    cursor: default;
    font-size: 12px;
  }
`;

const ShareComment = styled.div`
  border-left: 1px solid rgba(0, 0, 0, 0.15);
  padding-left: 8px;
  margin-right: auto;

  ${AssetButtons} {
    img {
      margin-right: 5px;
      height: 18px;
      width: 18px;
    }
  }
`;

const PostContent = styled.button`
  background-color: #0a66c2;
  border: none;
  border-radius: 25px;
  color: #fff;
  cursor: pointer;
  padding: 8px 20px;
  outline: none;
  min-width: 60px;

  &:hover {
    background-color: #004182;
  }
`;

const TextField = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  textarea {
    padding: 8px;
    margin: 0 auto;
    min-height: 80px;
    resize: none;
    width: 90%;
  }
`;

export default PostModal;
