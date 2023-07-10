import { useState } from "react";
import styled from "styled-components";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const onChangeKeyword = (event) => {
    setKeyword(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (keyword === "") {
      return;
    }
    console.log(keyword + " 검색중..");
    setKeyword("");
  };

  const logoClick = (event) => {
    console.log("Logo clicked(홈페이지로 이동)")
  }

  const myInfoClick = (event) => {
    console.log("My Information Clicked(내정보 이동)")
  }
  
  return (
    <Header_container>
      <Header_contents>
        <div>
          <img
            src="img/keyboard_logo.png"
            width={40}
            height={40}
            onClick={()=>logoClick()}
          />
        </div>
        <nav>
          <Nav_ul>
            <Nav_li>
              <form onSubmit={onSubmit}>
                <input
                  value={keyword}
                  onChange={onChangeKeyword}
                  type="text"
                  placeholder="검색어를 입력해주세요"
                />
                <button>검색</button>
              </form>
            </Nav_li>
            <Nav_li onClick={myInfoClick}>회원정보</Nav_li>
          </Nav_ul>
        </nav>
      </Header_contents>
    </Header_container>
  );
};

const Header_container = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: grey;
`;
const Header_contents = styled.div`
  display: flex;
  width: 96%;
  max-width: 1100px;
  height: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`;

const Nav_li = styled.li`
  margin-left: 30px;
`;

const Nav_ul = styled.ul`
  display: flex;
  list-style: none;
`;

export default Header;
