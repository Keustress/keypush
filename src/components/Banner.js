import React from "react";
import styled from "styled-components";
import "./Banner.css";

const Banner = () => {
  return (
    <Container>
      <div className="banner__slide">
        <a className="banner__item" href>
          <img className="banner__cover" src="./images/keyboard-13.png" alt="keyboard" />
          <div className="banner__txt">
            <div className="banner__txt_title">게시글 제목</div>
            <div className="banner__txt_user">작성자</div>
            <div className="banner__user_icon">작성자 그림</div>
          </div>
          <div className="banner--fadeBottom" />
        </a>
      </div>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  max-height: 100%;
  z-index: 1;
`;
