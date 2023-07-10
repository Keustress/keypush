import React from "react";
import styled from "styled-components";
import "./Category.css";

const Category = () => {
  return (
    <Container>
      <ContainerListWrap>
        <ContainerListHead>
          <div className="tabs__component">
            <div className="tabs__component_tabs">
              <div className="tabs__component_tab">
                <font styled="vertical-align: ingerit;">구입</font>
              </div>
              <div className="tabs__component_tab">
                <font styled="vertical-align: ingerit;">판매</font>
              </div>
              <div className="tabs__component_tab">
                <font styled="vertical-align: ingerit;">정보</font>
              </div>
              <div className="tabs__component_tab">
                <font styled="vertical-align: ingerit;">기타</font>
              </div>
            </div>
          </div>
        </ContainerListHead>
        <ContainerInfoWrap>
          <ContainerFilterTabs>
            <div className="tabs__filter">
              <div className="mr-20 fw-b">
                <font styled="vertical-align: ingerit;">필터</font>
              </div>
              <div className="mr-10 fw-b f-13">
                <font styled="vertical-align: ingerit;">공식</font>
              </div>
              <div className="mr-10 fw-b f-13">
                <font styled="vertical-align: ingerit;">구입</font>
              </div>
            </div>
          </ContainerFilterTabs>
          <ContainerInfo>
            <div className="info__posts">
              <div className="info__column">
                <div className="info__card">
                  <a href="/" className="info__card_img mb-10">
                    <img
                      src="./images/keyboard-13.png"
                      className="info__card_css mb-5 cover"
                      alt="info_card"
                    />
                    <div className="info__title f-16 fw-b ellipsis padding">
                      <font styled="vertical-align: ingerit;">게시글 내용</font>
                    </div>
                    <div className="info__text f-14 ellipsis padding">
                      <font styled="vertical-align: ingerit;">게시글 요약</font>
                    </div>
                  </a>
                  <a href="/" className="info__card_user f-10 flex_center_v">
                    <div className="flex_center_v">
                      <div className="mr-10">유저 이미지</div>
                      <div className="desc flex">제품 정보</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="info__column">
                <div className="info__card">
                  <a href="/" className="info__card_img mb-10">
                    <img
                      src="./images/keyboard-13.png"
                      className="info__card_css mb-5 cover"
                      alt="info_card"
                    />
                    <div className="info__title f-16 fw-b ellipsis padding">
                      <font styled="vertical-align: ingerit;">게시글 내용</font>
                    </div>
                    <div className="info__text f-14 ellipsis padding">
                      <font styled="vertical-align: ingerit;">게시글 요약</font>
                    </div>
                  </a>
                  <a href="/" className="info__card_user f-10 flex_center_v">
                    <div className="flex_center_v">
                      <div className="mr-10">유저 이미지</div>
                      <div className="desc flex">제품 정보</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </ContainerInfo>
        </ContainerInfoWrap>
      </ContainerListWrap>
    </Container>
  );
};

export default Category;

const Container = styled.div`
  padding: 0 15px;
  justify-content: space-between;
  display: flex;
`;

const ContainerListWrap = styled.div`
  width; 620px;
  display: inline-block;
`;

const ContainerListHead = styled.div`
  position: sticky;
  top: 50px;
  border-bottom: 1px solid;
  z-index: 3;
`;

const ContainerInfoWrap = styled.div`
  min-height: 350px;
`;

const ContainerFilterTabs = styled.div``;

const ContainerInfo = styled.div`
  position: relative;
  width: 100%;
  font-size: 12px;
  color: #111;
`;
