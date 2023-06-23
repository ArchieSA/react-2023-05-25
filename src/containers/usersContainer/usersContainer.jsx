import { selectUsers } from "@/redux/features/users/selector";
import React from "react";
import { useSelector } from "react-redux";

export const UserContainer = ({ userId }) => {
  const user = useSelector((state) => selectUsers(state, userId));
  return <div>{user}</div>;
};
