import { User } from "@/components/User/User";
import { selectUser, selectUserStatus } from "@/redux/features/user/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const UserContainer = ({ userId, ...props }) => {
  const user = useSelector((state) => selectUser(state, userId));
  const userSattus = useSelector((state) => selectUserStatus(state, userId));

  if (!user) {
    return null;
  }

  if (userSattus === "pending") {
    return <span>Loading...</span>
  }

  return <User {...props} user={user} />;
};
