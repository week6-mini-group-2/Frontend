import React from "react";
import styled from "styled-components";
import "../css/variable.scss";
import Btn from "../elements/Btn";
import { userSignup } from "../redux/modules/user";
import useInput from "../hooks/useInput";

import { nicknameCheck, passwordCheck } from "../shared/regExp";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Signup = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const [nickname, nicknameHandler] = useInput("");
  const [password, passwordHandler] = useInput("");
  const [confirmPassword, confirmPasswordHandler] = useInput("");
  console.log("여기확인", nickname, password, confirmPassword);

  const submitHandler = (e) => {
    e.preventDefault();
    if (nickname === "" || password === "" || confirmPassword === "") {
      window.alert("닉네임, 패스워드를 모두 입력해주세요!");
      return;
    }

    if (!nicknameCheck(nickname) && nickname.length < 4) {
      window.alert(
        "닉네임은 숫자 및 영어만 입력 가능하며 대문자를 포함해야 합니다.(3~10자리)"
      );
      return;
    }

    if (!passwordCheck(password) && password.length < 5) {
      window.alert(
        "비밀번호는 숫자 및 영어만 입력 가능하며 대문자를 포함해야 합니다.(4~30자리)"
      );
      return;
    }

    if (password !== confirmPassword) {
      window.alert("비밀번호와 비밀번호 재확인이 일치하지 않습니다.");
      return;
    }
    e.preventDefault();
    dispatch(
      userSignup({
        nickname,
        password,
        confirmPassword,
      })
    ).then((res) => {
      if (parseInt(Number(res.status) / 100) === 2) {
        window.alert(`${nickname}님 가입을 환영합니다.`);
        nav("/login");
      } else {
        alert(res.payload.msg);
      }
    });
  };

  return (
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
        <StLoginInnerBox onSubmit={submitHandler}>
          <StLoginInputWrap>
            <StLoginLabel>NICKNAME</StLoginLabel>
            <StLoginInput
              type="text"
              name="nickname"
              value={nickname || ""}
              onChange={nicknameHandler}
            />
            <StLoginLabel>PASSWORD</StLoginLabel>
            <StLoginInput
              type="password"
              name="password"
              value={password || ""}
              onChange={passwordHandler}
            />
            <StLoginLabel>CONFIRM PASSWORD</StLoginLabel>
            <StLoginInput
              type="password"
              name="confirmPassword"
              value={confirmPassword || ""}
              onChange={confirmPasswordHandler}
            />
          </StLoginInputWrap>
          <StBtnWrap>
            <Btn size="lg" onClick={submitHandler}>
              SUBMIT
            </Btn>
          </StBtnWrap>
        </StLoginInnerBox>
      </StLoginBox>
    </StLoginContainer>
  );
};

export default Signup;

const StLoginContainer = styled.div`
  display: flex;
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

const StLoginInnerBox = styled.form`
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
