import React from "react";

import { User } from "@/components/User/User";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/features/users/selectors";

export const UserContainer = ({ userId, ...props}) => {
  const user = useSelector((state) => selectUser(state, userId));

  if(!user) {
    return null;
  }

  return <User user={user} {...props} />
}