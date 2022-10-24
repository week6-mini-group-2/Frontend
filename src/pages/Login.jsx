import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../css/variable.scss";
import Btn from "../elements/Btn";
import { userLogin, userSignup } from "../redux/modules/user";

const Login = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  /* login form  <-->  signup form (boolean) */
  const [isEdit, setIsEdit] = useState(false);

  /* state about login and register */

  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  /* validate */

  const nameReg = /^[a-zA-Z0-9]{3,10}$/;
  const pwReg = /^[a-zA-Z0-9]{4,30}$/;

  const cleanName = useCallback(() => {
    setNickname("");
  }, [nickname]);

  const cleanPw = useCallback(() => {
    setPassword("");
  }, [password]);

  const loginHandler = useCallback(
    async (e) => {
      e.preventDefault();
      if (nickname === "") {
        alert("닉네임을 입력해주세요");
        console.log(nickname);
      } else if (nameReg.test(nickname) === false) {
        alert("닉네임 형식에 맞춰 올바르게 작성해 주세요");
      } else if (password === "") {
        alert("비밀번호를 입력해주세요");
      } else if (pwReg.test(password) === false) {
        alert("비밀번호 형식에 맞춰 올바르게 작성해 주세요");

        /* backend 에서 유효성 검사를 한번 더 해주는 걸 고려해서
      dispatch 를 짜봐야됨.. 
      */
      } /* else if (dispatch(userLogin({ nickname, password }))
      .then((res) => {
        if (res.payloadd.status === 200) {
          console.log("~~ 님 안녕하세요~");
          nav(-1);
        } else {
          alert("disconnected");
        }
      });
    ) */
    },
    [nickname, password]
  );
  /*
정규식
const onChange = (e) => {
  const REGID = /^(?=.*[a-z0-9])[a-z0-9]{3,10}$/;
  const REGPW =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,12}/;
  const { name, value } = e.target;
  setForm((form) => ({ ...form, [name]: value }));
  if (form.id === "" || !REGID.test(id)) {
  
    setAlertBox("아이디는 영문 또는 숫자 4-10자입니다");
  } else if (password === "" || !REGPW.test(password)) {
    setAlertBox("비밀번호는 대소문자,숫자,특수기호 포함 6-12자 입니다");
  } else if (confirmPassword === "" || confirmPassword !== password) {
    setAlertBox("비밀번호가 일치하지 않습니다");
  } else if (userName === "" || userName.length > 7) {
    setAlertBox("이름을 확인해주세요");
  } else {
    setAlertBox("");
    //버튼 활성화 토글
    setJoinToggle(false);
  }
}; */

  const changeIsEdit = (e) => {
    e.preventDefault();
    setIsEdit(!isEdit);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch();
    nav("/");
  };

  return (
    <>
      <StLoginContainer>
        <StImageContainer>
          <StImg />
          <StImageTextBox>
            <StText>환경운동에 동참해주세요.</StText>
            <StText>여러분의 작은 행동 하나가</StText>
            <StText>지구를 변화시킵니다.</StText>
          </StImageTextBox>
        </StImageContainer>
        <StLoginBox>
          <StHeaderContainer>
            <a href="/">
              <StLogo src="./logo.png" />
            </a>
            <StTiltle>EarthGreen</StTiltle>
          </StHeaderContainer>
          {isEdit === false ? (
            /* 아래 박스를 form으로 지정하여 onSubmit으로 event 값을 다뤄야 되지 않을까.. */
            <StLoginInnerBox>
              <StLoginInputWrap>
                <StLoginLabel>NICKNAME</StLoginLabel>
                <StLoginInput />
                <StLoginLabel>PASSWORD</StLoginLabel>
                <StLoginInput />
              </StLoginInputWrap>
              <StBtnWrap>
                <Btn size="lg">LOGIN</Btn>
                <Btn onClick={changeIsEdit} size="lg">
                  SIGNUP
                </Btn>
              </StBtnWrap>
            </StLoginInnerBox>
          ) : (
            <StLoginInnerBox>
              <StLoginInputWrap>
                <StLoginLabel>NICKNAME</StLoginLabel>
                <StLoginInput />
                <StLoginLabel>PASSWORD</StLoginLabel>
                <StLoginInput />
                <StLoginLabel>CONFIRM PASSWORD</StLoginLabel>
                <StLoginInput />
              </StLoginInputWrap>
              <Btn size="lg" onClick={submitHandler}>
                SUBMIT
              </Btn>
            </StLoginInnerBox>
          )}
        </StLoginBox>
      </StLoginContainer>
    </>
  );
};

export default Login;

const StLoginContainer = styled.div`
  display: flex;
`;

const StImageContainer = styled.div`
  width: 65%;
  height: 100vh;
  margin: 0 auto;
`;

const StImg = styled.img`
  background-image: url("https://imageio.forbes.com/specials-images/imageserve/5f2112c33c2caf3ca953d0ad/green-planet/960x0.jpg?format=jpg&width=960");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
`;

const StImageTextBox = styled.div`
  font-size: 1.5em;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  position: absolute;
  top: 10%;
  left: 10%;
  transform: translate(-45%, -45%);
`;

const StText = styled.p`
  color: white;
  margin-top: 0.8em;
  font-size: 1em;
  text-shadow: 0.1em 0.1em 0.2em black;
`;

const StLoginBox = styled.div`
  background: var(--base-color);
  width: 35%;
  height: 100vh;
  display: flex;
  flex-flow: column;
  box-shadow: -0.1em 0em 0.5em lightgray;
`;

const StHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6em 0em 2em;
`;

const StLogo = styled.img`
  width: 2em;
  height: 2em;
  margin-right: 0.8em;
  font-size: 1.5em;
`;

const StTiltle = styled.p`
  font-size: 2.4em;
  padding-top: 0.1em;
  color: var(--grid-color);
`;

const StLoginInnerBox = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  margin: 4em 3em;
`;

const StLoginInputWrap = styled.div`
  display: flex;
  flex-flow: column;
`;

const StLoginLabel = styled.label`
  color: var(--grid-color);
  text-shadow: 0.2em 0.2em 0.2em white;
  font-size: 1.2em;
  margin-bottom: 0.8em;
`;

const StLoginInput = styled.input`
  width: 26em;
  height: 3em;
  margin-bottom: 3em;
  border: none;
  border-radius: var(--radius-small);
  box-shadow: 0em 0em 0.5em lightgray;
`;

const StBtnWrap = styled.div`
  display: flex;
  flex-flow: column;
  row-gap: 1rem;
`;
