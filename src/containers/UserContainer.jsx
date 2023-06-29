import { User } from "@/components/User/User";
import { selectUser } from "@/redux/features/user/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const UserContainer = ({ userId, ...props }) => {
  const user = useSelector((state) => selectUser(state, userId));

  if (!user) {
    return null;
  }

  return <User {...props} user={user} />;
};
