import React from "react";
import styled from "styled-components";
import "../App.scss";
import Category from "../components/Category";
import Header from "../components/Header";
import PlusBtn from "../elements/PlusBtn";

import "../css/variable.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();

  const formHandler = () => {
    nav("/form");
  };

  return (
    <>
      <Header />
      <StConatainer>
        <StWrap>
          <Category />
          <StBtnBox>
            <PlusBtn size="lg" onClick={formHandler}>
              ＋
            </PlusBtn>
          </StBtnBox>
        </StWrap>
      </StConatainer>
    </>
  );
};

export default Home;

const StConatainer = styled.div`
  height: 100vh;
`;

const StWrap = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const StBtnBox = styled.div`
  width: 0;
  position: sticky;
  top: 90%;
  left: 95%;
`;

// const onChange = (e) => {
//   const REGID = /^(?=.*[a-z0-9])[a-z0-9]{3,10}$/;
//   const REGPW =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,12}/;
//   const { name, value } = e.target;
//   setForm((form) => ({ ...form, [name]: value }));
//   if (form.id === "" || !REGID.test(id)) {
//     setAlertBox("아이디는 영문 또는 숫자 4-10자입니다");
//   } else if (password === "" || !REGPW.test(password)) {
//     setAlertBox("비밀번호는 대소문자,숫자,특수기호 포함 6-12자 입니다");
//   } else if (confirmPassword === "" || confirmPassword !== password) {
//     setAlertBox("비밀번호가 일치하지 않습니다");
//   } else if (userName === "" || userName.length > 7) {
//     setAlertBox("이름을 확인해주세요");
//   } else {
//     setAlertBox("");
//     //버튼 활성화 토글
//     setJoinToggle(false);
//   }
// };
