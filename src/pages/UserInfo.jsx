import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/modules/user";

const UserInfo = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return <div>유저인포</div>;
};

export default UserInfo;
