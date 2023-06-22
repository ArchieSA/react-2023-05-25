import React from "react";
import { useSelector } from "react-redux";

import { selectUser } from "@/redux/features/users/selectors";


export const UserContainer = ({ userId }) => {
  const user = useSelector((state) => selectUser(state, userId));

  return <div>{user.name}</div>;
};
