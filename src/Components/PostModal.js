import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import ReactPlayer from "react-player";
import firebase from "firebase/app";
import { postMediaAPI } from "../actions/actions";

const PostModal = ({ modalState, setModalState, user, postAnArticle }) => {
  const [postText, setPostText] = useState("");
  const [shareImage, setShareImage] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [assetArea, setAssetArea] = useState("");

  // hide modal function
  const hideModal = (e) => {
    e.preventDefault();

    setPostText("");
    setShareImage("");
    setVideoLink("");
    setAssetArea("");
    setModalState("close");

    console.log("hideModal invoked...");
  };

  // share image function
  const imageShare = (e) => {
    const image = e.target.files[0];

    if (image === "" || image === undefined) {
      alert(`Could not upload image. The file is a ${typeof image}`);
      return;
    }

    setShareImage(image);
  };

  // switch asset area function
  const switchAssetArea = (area) => {
    setShareImage("");
    setVideoLink("");
    setAssetArea(area);
  };

  // post article function
  const postArticle = (e) => {
    e.preventDefault();

    if (e.target !== e.currentTarget) {
      return;
    }

    const payload = {
      image: shareImage,
      video: videoLink,
      user: user,
      description: postText,
      timestamp: firebase.firestore.Timestamp.now(),
    };

    postAnArticle(payload);
    hideModal(e);
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
                {user.photoURL ? (
                  <img src={user.photoURL} alt="user profile icon" />
                ) : (
                  <img src="/images/user.svg" alt="user profile icon" />
                )}

                <span>{user.displayName}</span>
              </UserInfo>

              <TextField>
                <textarea
                  value={postText}
                  onChange={(e) => setPostText(e.target.value)}
                  placeholder="What do you want to talk about?"
                  autoFocus={true}
                />

                {assetArea === "image" ? (
                  <UploadImage>
                    <input
                      type="file"
                      name="image"
                      id="file"
                      accept="image/gif, image/jpeg, image/png"
                      onChange={imageShare}
                    />
                    {shareImage && (
                      <img
                        src={URL.createObjectURL(shareImage)}
                        alt="uploaded file"
                      />
                    )}
                  </UploadImage>
                ) : (
                  assetArea === "video" && (
                    <UploadVideo>
                      <input
                        type="text"
                        placeholder="Enter a video link eg. https://youtube.com"
                        value={videoLink}
                        onChange={(e) => setVideoLink(e.target.value)}
                      />
                      {videoLink && (
                        <ReactPlayer
                          width={"90%"}
                          style={{ margin: "0 auto" }}
                          url={videoLink}
                        />
                      )}
                    </UploadVideo>
                  )
                )}
              </TextField>
            </ShareContent>

            <ShareOptions>
              <AttachAssets>
                <AssetButton onClick={() => switchAssetArea("image")}>
                  <img src="/images/image-icon.svg" alt="share photos" />
                </AssetButton>
                <AssetButton onClick={() => switchAssetArea("video")}>
                  <img src="/images/video-icon.svg" alt="share videos" />
                </AssetButton>
              </AttachAssets>

              <ShareComment>
                <AssetButton>
                  <img src="/images/comment-post.svg" alt="add comment" />
                  <span>Anyone</span>
                </AssetButton>
              </ShareComment>

              <PostContent
                disabled={!postText ? true : false}
                onClick={(e) => postArticle(e)}
              >
                Post
              </PostContent>
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

const AttachAssets = styled.div`
  display: flex;
  align-items: center;
  padding-right: 8px;
`;

const AssetButton = styled.button`
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
  }

  span {
    cursor: default;
    font-size: 12px;
  }
`;

const ShareOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
`;

const ShareComment = styled.div`
  border-left: 1px solid rgba(0, 0, 0, 0.15);
  padding-left: 8px;
  margin-right: auto;

  ${AssetButton} {
    img {
      margin-right: 5px;
      height: 18px;
      opacity: 0.5;
      width: 18px;
    }
  }
`;

const PostContent = styled.button`
  background-color: ${(props) =>
    props.disabled ? "rgba(0, 0, 0, 0.4)" : "#0a66c2"};
  border: none;
  border-radius: 25px;
  color: ${(props) => (props.disabled ? "rgba(0, 0, 0, .4)" : "#fff")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  padding: 8px 20px;
  outline: none;
  min-width: 60px;

  &:hover {
    background-color: ${(props) =>
      props.disabled ? "rgba(0, 0, 0, 0.4)" : "#004182"};
  }
`;

const TextField = styled.div`
  display: flex;
  flex-direction: column;
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

const UploadImage = styled.div`
  text-align: center;
  margin: 10px auto 0;

  img {
    margin: 0 auto;
    width: 90%;
  }

  input {
    display: block;
    margin: 0 auto 10px;
    width: 80%;
  }
`;

const UploadVideo = styled.div`
  text-align: center;
  margin: 10px auto 0;
  width: 90%;

  input {
    display: block;
    padding: 4px 6px;
    margin: 0 auto 10px;
    width: 80%;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postAnArticle: (payload) => dispatch(postMediaAPI(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);
