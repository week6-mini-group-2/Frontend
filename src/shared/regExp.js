export const nicknameCheck = (nickname) => {
  let regExp = /^[a-zA-Z0-9]{3,10}$/;
  // 대문자 포함
  return regExp.test(nicknameCheck);
};

export const passwordCheck = (password) => {
  let _reg = /^[a-zA-Z0-9]{4,30}$/;

  return _reg.test(passwordCheck);
};

// const re_nickname = /^[a-zA-Z0-9]{3,10}$/;
// const re_password = /^[a-zA-Z0-9]{4,30}$/;
// const userSchema = joi.object({
//   nickname: joi.string().pattern(re_nickname).required(),
//   password: joi.string().pattern(re_password).required(),
//   confirmPassword: joi.string(),
// });
