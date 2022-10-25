export const nicknameCheck = (nickname) => {
  let regExp = /^[0-9a-zA-Z]/;
  // 대문자 포함
  return regExp.test(nicknameCheck);
};

// export const passwordCheck = (password) => {
//   let _reg =
//     /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-z])*.([a-zA-Z])*/;

//   return _reg.test(passwordCheck);
// };
